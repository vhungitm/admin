import menuAPI from 'api/menu/menuAPI';
import { adminActions, selectAdmin } from 'app/adminSlice';
import { useAppSelector } from 'app/store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { sidebar } = useAppSelector(selectAdmin);
	const [menuShowId, setMenuShowId] = useState([]);

	// Menu sidebar
	const [menu, setMenu] = useState([]);

	// Fetch menu data from api
	useEffect(() => {
		const fetchData = async () => {
			const res = await menuAPI.getMenu();

			// Get new data and update home page url
			let newData = res.data;
			let home = newData.find(item => item.linkMenuURL === '/');
			home.linkMenuURL = '/home';

			// Update new data
			setMenu(res.data);
		};

		fetchData();
	}, []);

	const onClickMenuItem = menuItem => {
		// Have sub menu => show sub menu
		// Else navigate to link
		if (!menuItem.menuSubList) {
			navigate(menuItem.linkMenuURL);
			setMenuShowId(null);
		} else {
			if (menuShowId === menuItem.menuId) setMenuShowId(null);
			else setMenuShowId(menuItem.menuId);
		}
	};

	const onShow = () => {
		dispatch(adminActions.setShowSidebar(!sidebar.show));
	};

	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<div className="sidebar-button" onClick={onShow}>
					<div className="sidebar-button-line line-1" />
					<div className="sidebar-button-line line-2" />
					<div className="sidebar-button-line line-3" />
				</div>
			</div>
			<div className="sidebar-menu">
				{menu?.map((item, itemIndex) => {
					const currPath = window.location.pathname;
					const isActive = currPath.startsWith(item.linkMenuURL);
					const isShowSubMenu = menuShowId === item.menuId;

					let menuItemClassName = 'sidebar-menu-item';
					if (isActive) menuItemClassName += ' is-active';
					if (isShowSubMenu) menuItemClassName += ' is-show-sub-menu';

					return (
						<div key={item.menuId} className={menuItemClassName} onClick={() => onClickMenuItem(item)}>
							<div className="sidebar-menu-item-content">
								<img
									src={'/media/layout/admin/menu-' + itemIndex + '.png'}
									className="sidebar-menu-item-icon"
									alt={item.menuName}
								/>
								<div className="sidebar-menu-item-title">{item.menuName}</div>
							</div>

							{item.menuSubList && (
								<div className="sidebar-sub-menu">
									{item.linkMenuURL && (
										<Link to={item.linkMenuURL} className="sidebar-sub-menu-title">
											{item.menuName}
										</Link>
									)}
									{item.menuSubList?.map(subItem => {
										const subItemIsActive = currPath.startsWith(subItem.linkMenuSubURL);
										let subItemClassName = 'sidebar-sub-menu-item';
										if (subItemIsActive) subItemClassName += ' is-active';

										return (
											<Link
												to={subItem.linkMenuSubURL}
												key={subItem.menuSubId}
												className={subItemClassName}
											>
												{subItem.menuSubName}
											</Link>
										);
									})}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;

import { adminActions, selectAdmin } from 'app/adminSlice';
import { useAppSelector } from 'app/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { sidebar } = useAppSelector(selectAdmin);
	const [menuShowId, setMenuShowId] = useState([]);

	const onClickMenuItem = menuItem => {
		// Have sub menu => show sub menu
		// Else navigate to link
		if (!menuItem.items) navigate(menuItem.href);
		else {
			if (menuShowId === menuItem.id) setMenuShowId(null);
			else setMenuShowId(menuItem.id);
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
				{sidebar.menu?.map(item => {
					const currPath = window.location.pathname;
					const isActive = currPath.startsWith(item.href);
					const isShowSubMenu = menuShowId === item.id;

					let menuItemClassName = 'sidebar-menu-item';
					if (isActive) menuItemClassName += ' is-active';
					if (isShowSubMenu) menuItemClassName += ' is-show-sub-menu';

					return (
						<div key={item.id} className={menuItemClassName} onClick={() => onClickMenuItem(item)}>
							<div className="sidebar-menu-item-content">
								<img
									src={'/media/layout/admin/' + item.icon}
									className="sidebar-menu-item-icon"
									alt={item.title}
								/>
								<div className="sidebar-menu-item-title">{item.title}</div>
							</div>

							{item.items && (
								<div className="sidebar-sub-menu">
									{item.href && (
										<Link to={item.href} className="sidebar-sub-menu-title">
											{item.subTitle}
										</Link>
									)}
									{item.items.map(subItem => (
										<Link to={subItem.href} key={subItem.id} className={'sidebar-sub-menu-item'}>
											{subItem.title}
										</Link>
									))}
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

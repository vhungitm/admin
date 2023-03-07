import { adminActions, selectAdmin } from 'app/adminSlice';
import { useAppSelector } from 'app/store';
import { useDispatch } from 'react-redux';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const { sidebar } = useAppSelector(selectAdmin);
	const dispatch = useDispatch();

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
				{sidebar.menu?.map(item => (
					<Link
						to={item.href}
						key={item.name}
						className={`sidebar-menu-item ${
							window.location.pathname.startsWith(item.href) ? 'is-active' : ''
						}`}
					>
						<img
							src={'/media/layout/admin/' + item.icon}
							className="sidebar-menu-item-icon"
							alt={item.title}
						/>
						<div className="sidebar-menu-item-title">{item.title}</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;

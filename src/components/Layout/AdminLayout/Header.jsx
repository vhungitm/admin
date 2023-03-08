import { authActions, selectAuth } from 'app/authSlice';
import { useAppSelector } from 'app/store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	const dispatch = useDispatch();
	const { currentUser } = useAppSelector(selectAuth);
	const [showUserMenu, setShowUserMenu] = useState(false);

	// Effect close user menu
	const ref = useRef();
	useEffect(() => {
		const handleCloseUserMenu = e => !ref?.current?.contains(e.target) && setShowUserMenu(false);

		window.addEventListener('click', handleCloseUserMenu);
		return () => window.removeEventListener('click', handleCloseUserMenu);
	}, []);
	const onShowUserMenu = () => setShowUserMenu(!showUserMenu);
	const onLogout = () => {
		dispatch(authActions.setCurrentUser(null));
	};

	return (
		<header className="header">
			<Link to="/home">
				<img src="/media/logo.png" className="header-logo" alt="TMA Solutions" />
			</Link>
			<div ref={ref} className={`header-user ${showUserMenu ? 'is-show-menu' : ''}`} onClick={onShowUserMenu}>
				<div className="header-user-content">
					<img src="/media/login/avatar.png" className="header-user-avatar" alt="Avatar" />
					<div className="header-user-name">{currentUser?.username}</div>
				</div>
				<div className="header-user-menu">
					<div className="header-user-menu-item" onClick={onLogout}>
						Logout
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

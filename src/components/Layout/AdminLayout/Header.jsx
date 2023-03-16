import { authActions, selectAuth } from 'app/authSlice';
import { useAppSelector } from 'app/store';
import { ButtonIconSplit } from 'itm-ui';
import { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
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

	// Handle logout
	const [showLogoutModal, setShowLogoutModal] = useState(false);

	const onShowLogoutModal = () => setShowLogoutModal(true);
	const onCloseLogoutModal = () => setShowLogoutModal(false);

	const onLogout = () => {
		setShowLogoutModal(false);
		dispatch(authActions.setCurrentUser(null));
		toast.success('Goodbye!');
	};

	return (
		<header className="header">
			<Link to="/home">
				<img src="/media/logo.png" className="header-logo" alt="TMA Solutions" />
			</Link>
			<div ref={ref} className={`header-user ${showUserMenu ? 'is-show-menu' : ''}`} onClick={onShowUserMenu}>
				<div className="header-user-content">
					<img src="/media/login/avatar.png" className="header-user-avatar" alt="Avatar" />
					<div className="header-user-name">{currentUser?.userName}</div>
				</div>
				<div className="header-user-menu">
					<div className="header-user-menu-item" onClick={onShowLogoutModal}>
						Log out
					</div>
				</div>
			</div>
			<Modal centered show={showLogoutModal} onHide={onCloseLogoutModal}>
				<Modal.Body className="p-4">Do you want to log out?</Modal.Body>
				<Modal.Footer className="bg-light">
					<Button size="sm" variant="light" onClick={onCloseLogoutModal}>
						Cancel
					</Button>
					<ButtonIconSplit
						size="sm"
						variant="danger"
						iconStart={{ type: 'css', className: 'fas fa-sign-out' }}
						element="Log out"
						onClick={onLogout}
					/>
				</Modal.Footer>
			</Modal>
		</header>
	);
};

export default Header;

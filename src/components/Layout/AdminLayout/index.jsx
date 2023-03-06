import { selectAdmin } from 'app/adminSlice';
import { selectAuth } from 'app/authSlice';
import { useAppSelector } from 'app/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './index.scss';
import Sidebar from './Sidebar';

const AdminLayout = props => {
	const { element } = props;
	const { sidebar } = useAppSelector(selectAdmin);
	const navigate = useNavigate();
	const { currentUser } = useAppSelector(selectAuth);

	useEffect(() => {
		if (!currentUser) navigate('/login');
	}, [currentUser, navigate]);

	return (
		<div className={`admin ${sidebar.show ? 'show-sidebar' : ''}`}>
			<Sidebar />
			<div className="admin-end">
				<Header />
				<div className="admin-content">{element}</div>
				<Footer />
			</div>
		</div>
	);
};

export default AdminLayout;

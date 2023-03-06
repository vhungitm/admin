import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === '/') navigate('/home');
	}, [navigate]);

	return <div>HomePage</div>;
};

export default HomePage;

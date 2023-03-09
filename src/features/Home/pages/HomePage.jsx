import { ButtonIconSplit } from 'components/ITM';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === '/') navigate('/home');
	}, [navigate]);

	return (
		<div className="home">
			<div className="page-header">
				<div className="page-header-title">Home</div>
			</div>
		</div>
	);
};

export default HomePage;

import { ButtonIconSplit } from 'components/ITM';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === '/') navigate('/home');
	}, [navigate]);

	// Modal
	const [showModal, setShowModal] = useState(true);
	const handleCloseModal = () => setShowModal(false);

	return (
		<div className="home">
			<div className="page-header">
				<div className="page-header-title">Home</div>
				<Modal centered show={showModal} onHide={handleCloseModal}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="outline-danger" onClick={handleCloseModal}>
							Cancel
						</Button>
						<Button variant="outline-primary" onClick={handleCloseModal}>
							Save data
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};

export default HomePage;

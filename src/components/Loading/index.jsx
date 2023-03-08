import { Spinner } from 'react-bootstrap';
import './index.scss';

const Loading = () => {
	return (
		<div className="loading-container">
			<Spinner animation="border" className="loading" role="status" variant="primary">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
			<div className="loading-shadow" />
		</div>
	);
};

export default Loading;

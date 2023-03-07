import { Link } from 'react-router-dom';
import './404Page.scss';

const NotFoundPage = () => {
	return (
		<div className="not-found-container">
			<div className="not-found">
				<img src="/media/not-found/not-found.webp" alt="Not Found" className="not-found-logo" />
				<div className="not-found-title" data-text="404">
					404
				</div>
				<div className="not-found-sub-title">Không tìm thấy trang!</div>
				<div className="not-found-message">
					Đường dẫn không tồn tại. Quay về <Link to="/home">Trang chủ</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;

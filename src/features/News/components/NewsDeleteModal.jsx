import { ButtonIconSplit } from 'itm-ui';
import { Button, Modal } from 'react-bootstrap';

const NewsDeleteModal = props => {
	const { data, show, onClose, onSubmit } = props;

	return (
		<Modal centered show={show} onHide={onClose}>
			<Modal.Body closeButton>
				Do you want to delete news: <b>{data.title}</b>?
			</Modal.Body>
			<Modal.Footer className="bg-light">
				<Button size="sm" variant="light" onClick={onClose}>
					Cancel
				</Button>
				<ButtonIconSplit
					size="sm"
					variant="danger"
					iconStart={{ type: 'css', className: 'fas fa-trash' }}
					element="Delete"
					onClick={onSubmit}
				/>
			</Modal.Footer>
		</Modal>
	);
};

export default NewsDeleteModal;

import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonIconSplit, FormFieldControlGroup } from 'itm-ui';
import { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const NewsCategoryUpdateModal = props => {
	const { data, show, onClose, onSubmit } = props;

	// Form
	const validate = yup.object().shape({
		title: yup.string().required('Please enter category name!')
	});
	const { control, reset, handleSubmit } = useForm({
		defaultValues: data,
		resolver: yupResolver(validate)
	});

	// Effect update form data
	useEffect(() => {
		reset(data);
	}, [data, reset]);

	return (
		<Modal centered show={show} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Update Category</Modal.Title>
			</Modal.Header>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Modal.Body>
					<FormFieldControlGroup
						label={{ element: 'Category Name', required: true }}
						element={{ control, name: 'title', placeholder: 'Enter category name' }}
					/>
				</Modal.Body>
				<Modal.Footer className="bg-light">
					<Button size="sm" variant="light" onClick={onClose}>
						Cancel
					</Button>
					<ButtonIconSplit
						type="submit"
						size="sm"
						iconStart={{ type: 'css', className: 'fas fa-check' }}
						element="Save"
					/>
				</Modal.Footer>
			</form>
		</Modal>
	);
};

export default NewsCategoryUpdateModal;

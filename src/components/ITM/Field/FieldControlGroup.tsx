import { FormGroupProps } from 'react-bootstrap';
import {
	FieldControl,
	FieldControlProps,
	FieldFeedback,
	FieldFeedbackProps,
	FieldLabel,
	FieldLabelProps
} from '.';

export interface FieldControlGroupProps extends FormGroupProps {
	label?: FieldLabelProps;
	element: FieldControlProps;
	error?: FieldFeedbackProps;
}

export const FieldControlGroup = (props: FieldControlGroupProps) => {
	let { label, element, error, ...groupProps } = props;

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FieldControl {...element} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};

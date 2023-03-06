import { useEffect, useState } from 'react';
import { FormGroupProps } from 'react-bootstrap';
import { FieldFeedback, FieldFeedbackProps, FieldLabel, FieldLabelProps, FieldSelect, FieldSelectProps } from '.';

export interface FieldSelectGroupProps extends FormGroupProps {
	label?: FieldLabelProps;
	element: FieldSelectProps;
	error?: FieldFeedbackProps;
}

export const FieldSelectGroup = (props: FieldSelectGroupProps) => {
	const { label, element, error, ...groupProps } = props;
	const { value } = element;
	const [groupValue, setGroupValue] = useState('');

	useEffect(() => {
		if (value !== undefined) setGroupValue(value);
	}, [value]);

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}
			<FieldSelect {...element} value={groupValue} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};

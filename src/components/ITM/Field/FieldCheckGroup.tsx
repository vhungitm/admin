import { useEffect, useState } from 'react';
import { FormGroupProps } from 'react-bootstrap';
import {
	FieldCheck,
	FieldCheckProps,
	FieldFeedback,
	FieldFeedbackProps,
	FieldLabel,
	FieldLabelProps
} from '.';

export interface FieldCheckGroupProps extends FormGroupProps {
	label?: FieldLabelProps;
	element: FieldCheckProps;
	error?: FieldFeedbackProps;
}

export const FieldCheckGroup = (props: FieldCheckGroupProps) => {
	const { label, element, error, ...groupProps } = props;
	const { name, value, type, options = [], ...elementProps } = element;
	const [groupValue, setGroupValue] = useState(
		value || options.length >= 2 ? [] : false
	);

	useEffect(() => {
		if (value !== undefined) setGroupValue(value);
	}, [value]);

	return (
		<div {...groupProps}>
			{label && <FieldLabel {...label} />}

			{options.map((item, id) => (
				<FieldCheck
					key={`${name}-${id}`}
					id={`${name}-${id}`}
					name={name}
					type={type}
					options={options}
					groupValue={groupValue}
					setGroupValue={setGroupValue}
					{...elementProps}
					{...item}
				/>
			))}

			{error && <FieldFeedback {...error} />}
		</div>
	);
};

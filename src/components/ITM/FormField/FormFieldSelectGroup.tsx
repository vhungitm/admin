import { FieldFeedbackProps, FieldSelectGroup, FieldSelectGroupProps, FieldSelectProps } from '../Field';
import { ChangeEvent } from 'react';
import { Control, useController } from 'react-hook-form';

export interface FormFieldSelectElementGroupProps extends FieldSelectProps {
	control: Control;
	name: string;
}

export interface FormFieldSelectGroupProps extends FieldSelectGroupProps {
	element: FormFieldSelectElementGroupProps;
}

export const FormFieldSelectGroup = (props: FormFieldSelectGroupProps) => {
	const { label, element, ...groupProps } = props;
	const { control, name, ...elementProps } = element;
	let {
		field: { ref, onChange, ...fieldProps },
		fieldState
	} = useController({ control, name });

	const error: FieldFeedbackProps | undefined = fieldState.error && {
		type: 'invalid',
		message: fieldState.error.message
	};

	const isInvalid = fieldState?.error ? true : false;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

	return (
		<FieldSelectGroup
			label={label}
			element={{ ...fieldProps, onChange: handleChange, ...elementProps, isInvalid }}
			error={error}
			{...groupProps}
		/>
	);
};

import { FieldControlGroup, FieldControlGroupProps, FieldControlProps, FieldFeedbackProps } from '../Field';
import { Control, useController } from 'react-hook-form';

export interface FormFieldControlGroupsElementProps extends FieldControlProps {
	control: Control;
	name: string;
}

export interface FormFieldControlGroupProps extends FieldControlGroupProps {
	element: FormFieldControlGroupsElementProps;
}

export const FormFieldControlGroup = (props: FormFieldControlGroupProps) => {
	const { label, element, ...groupProps } = props;
	const { control, name, ...elementProps } = element;

	let {
		field: { ref, ...fieldProps },
		fieldState
	} = useController({ control, name });

	const error: FieldFeedbackProps | undefined = fieldState.error && {
		type: 'invalid',
		message: fieldState.error.message
	};

	const isInvalid = fieldState?.error ? true : false;

	return (
		<FieldControlGroup
			label={label}
			element={{ ...fieldProps, ...elementProps, isInvalid }}
			error={error}
			{...groupProps}
		/>
	);
};

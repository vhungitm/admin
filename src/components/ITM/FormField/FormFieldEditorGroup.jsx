import { useController } from 'react-hook-form';
import FieldEditorGroup from '../Field/FieldEditorGroup';

const FormFieldEditorGroup = props => {
	const { label, element, ...groupProps } = props;
	const { control, name, ...elementProps } = element;

	let {
		field: { ref, value, onChange, ...fieldProps },
		fieldState
	} = useController({ control, name });

	const error = fieldState.error && {
		type: 'invalid',
		message: fieldState.error.message
	};

	const isInvalid = fieldState?.error ? true : false;

	const handleChange = (event, editor) => {
		onChange(editor.getData());
	};

	return (
		<FieldEditorGroup
			label={label}
			element={{ ...fieldProps, ...elementProps, data: value, onChange: handleChange, isInvalid }}
			error={error}
			{...groupProps}
		/>
	);
};

export default FormFieldEditorGroup;

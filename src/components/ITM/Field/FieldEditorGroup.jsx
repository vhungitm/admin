import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'components/CKEditor5/ckeditor';
import { FieldFeedback } from './FieldFeedback';
import { FieldLabel } from './FieldLabel';
import '../scss/CKEditor.scss';

const FieldEditorGroup = props => {
	let { label, element, error, className, ...groupProps } = props;
	let groupClassName = className || '';
	if (error) groupClassName += ' is-invalid';

	return (
		<div {...groupProps} className={groupClassName}>
			{label && <FieldLabel {...label} />}
			<CKEditor editor={ClassicEditor} {...element} />
			{error && <FieldFeedback {...error} />}
		</div>
	);
};

export default FieldEditorGroup;

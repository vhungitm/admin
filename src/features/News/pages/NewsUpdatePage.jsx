import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonIconSplit, FormFieldControlGroup } from 'components/ITM';
import FormFieldEditorGroup from 'components/ITM/FormField/FormFieldEditorGroup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const NewsUpdatePage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      content: ''
    },
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().required('Please enter title!'),
        content: yup.string().required('Please enter content!')
      })
    )
  });

  const onSubmit = value => {
    console.log(value);
  };
  return (
    <div className="news-update">
      <div className="page-carousel">
        <Link to="/news" className="page-carousel-item">
          News
        </Link>
        <div className="page-carousel-item">Update</div>
      </div>
      <div className="page-header">
        <div className="page-header-title">Update News</div>
      </div>
      <div className="page-card">
        <div className="page-card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormFieldControlGroup
              label={{ element: 'Title', required: true, className: 'fw-bold' }}
              element={{ control, name: 'title', placeholder: 'Enter title' }}
              className="mb-3"
            />
            <FormFieldEditorGroup
              label={{ element: 'Content', className: 'fw-bold', required: true }}
              element={{
                control,
                name: 'content',
                config: { placeholder: 'Enter content' }
              }}
              className="mb-3"
            />
            <ButtonIconSplit type="submit" iconStart={{ type: 'css', className: 'fas fa-check' }} element="Save data" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdatePage;

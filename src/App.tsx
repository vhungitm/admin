import { yupResolver } from '@hookform/resolvers/yup';
import { selectAuth } from 'app/authSlice';
import { useAppSelector } from 'app/store';
import { ButtonIconSplit } from 'components/ITM/Button';
import { FormFieldCheckGroup, FormFieldControlGroup, FormFieldSelectGroup } from 'components/ITM/FormField';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';

import 'components/ITM/scss/itm.scss';
import './App.scss';

const App = () => {
	const auth = useAppSelector(selectAuth);
	console.log(auth);

	const defaultValues: FieldValues = {
		username: '',
		password: '',
		isRemember: false
	};

	const loginValidation = yup.object().shape({
		username: yup.string().required('Vui lòng nhập tài khoản!'),
		password: yup.string().required('Vui lòng nhập mật khẩu!'),
		roles: yup.string().required('Vui lòng chọn quyền!')
	});

	const { control, handleSubmit } = useForm({
		defaultValues,
		resolver: yupResolver(loginValidation)
	});

	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (value: FieldValues) => {
		console.log(value);
	};

	return (
		<div className="App">
			<form className="App-login" onSubmit={handleSubmit(onSubmit)}>
				<div className="login-header">
					<img src="/images/icons/no-avatar.png" alt="Login-icon" className="login-icon" />
				</div>

				<div className="login-body">
					<FormFieldControlGroup
						label={{ element: 'Tài khoản:', required: true }}
						element={{
							control,
							name: 'username',
							iconStart: {
								type: 'img',
								src: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'
							}
						}}
						className="mb-3"
					/>
					<FormFieldControlGroup
						label={{ element: 'Mật khẩu:', required: true }}
						element={{
							control,
							name: 'password',
							type: showPassword ? 'text' : 'password',
							iconStart: {
								type: 'img',
								src: 'https://cdn-icons-png.flaticon.com/512/1828/1828415.png'
							},
							iconEnd: {
								type: 'img',
								src: showPassword
									? 'https://cdn-icons-png.flaticon.com/512/2767/2767146.png'
									: 'https://cdn-icons-png.flaticon.com/512/2874/2874780.png',
								onClick: () => {
									setShowPassword(!showPassword);
								}
							}
						}}
						className="password mb-3"
					/>
					<FormFieldSelectGroup
						label={{ element: 'Quyền:', required: true }}
						element={{
							control,
							name: 'roles',
							options: [
								{ value: 'Admin', label: 'Admin' },
								{ value: 'Basic', label: 'Basic' }
							],
							iconStart: {
								type: 'img',
								src: 'https://cdn-icons-png.flaticon.com/512/3551/3551830.png'
							},
							isSearchable: false
						}}
						className="mb-3"
					/>
					<FormFieldCheckGroup
						element={{
							control,
							name: 'isRemember',
							options: [{ value: 'true', label: 'Nhớ tài khoản' }]
						}}
						className="mb-3"
					/>
					<ButtonIconSplit
						iconStart={{
							type: 'img',
							src: 'https://cdn-icons-png.flaticon.com/128/2996/2996170.png'
						}}
						iconEnd={{
							type: 'img',
							src: 'https://cdn-icons-png.flaticon.com/128/5097/5097464.png'
						}}
						element="Đăng nhập"
						type="submit"
						className="btn-block"
					/>
				</div>
			</form>
		</div>
	);
};

export default App;

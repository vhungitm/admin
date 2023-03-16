import { yupResolver } from '@hookform/resolvers/yup';
import authAPI from 'api/auth/authAPI';
import { authActions, selectAuth } from 'app/authSlice';
import { useAppSelector } from 'app/store';
import { ButtonIconSplit, FormFieldControlGroup } from 'itm-ui';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { validateEmail } from 'utils/common';
import * as yup from 'yup';
import './LoginPage.scss';

const LoginPage = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState();
	const defaultValues = {
		email: '',
		password: ''
	};

	const loginValidation = yup.object().shape({
		email: yup
			.string()
			.required('Email is required!')
			.test('validateEmail', 'Evalid is invalid!', value => validateEmail(value)),
		password: yup.string().required('Password is required!')
	});

	const { control, handleSubmit } = useForm({
		defaultValues,
		resolver: yupResolver(loginValidation)
	});

	// Check login
	const { currentUser } = useAppSelector(selectAuth);
	useEffect(() => {
		if (currentUser) navigate('/home');
	}, [currentUser, navigate]);

	const dispatch = useDispatch();
	const onSubmit = async value => {
		const res = await authAPI.login(value);

		if (res.succeeded) {
			const { data } = res;

			toast.success('Welcome ' + data.userName);
			dispatch(authActions.setCurrentUser(data));
		} else {
			setError('Email or password is invalid!');
		}
	};

	return (
		<div className="login-container">
			<form className="login" onSubmit={handleSubmit(onSubmit)}>
				<div className="login-header">
					<img src="/media/login/avatar.png" alt="Login" className="login-icon" />
					<div className="login-title">LOGIN</div>
				</div>

				<div className="login-body">
					<div className="login-error">{error}</div>
					<FormFieldControlGroup
						label={{ element: 'Email', required: true }}
						element={{
							control,
							name: 'email',
							placeholder: 'Enter your email',
							iconStart: {
								type: 'img',
								src: '/media/login/user.png'
							}
						}}
						className="mb-3"
					/>
					<FormFieldControlGroup
						label={{ element: 'Password', required: true }}
						element={{
							control,
							name: 'password',
							type: showPassword ? 'text' : 'password',
							placeholder: 'Enter your password',
							iconStart: {
								type: 'img',
								src: '/media/login/pass.png'
							},
							iconEnd: {
								type: 'img',
								src: showPassword ? '/media/login/view-pass.png' : '/media/login/hide-pass.png',
								onClick: () => {
									setShowPassword(!showPassword);
								}
							}
						}}
						className="password mb-3"
					/>
					<ButtonIconSplit
						iconStart={{
							type: 'css',
							className: 'fas fa-sign-in'
						}}
						element="Login"
						type="submit"
						className="btn-block mt-4"
					/>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;

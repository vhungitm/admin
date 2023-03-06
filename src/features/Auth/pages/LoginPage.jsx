import { yupResolver } from '@hookform/resolvers/yup';
import { authActions, selectAuth } from 'app/authSlice';
import { useAppSelector } from 'app/store';
import { ButtonIconSplit } from 'components/ITM/Button';
import {
	FormFieldCheckGroup,
	FormFieldControlGroup
} from 'components/ITM/FormField';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// CSS
import './LoginPage.scss';

const LoginPage = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState();
	const defaultValues = {
		username: '',
		password: '',
		isRemember: false
	};

	const loginValidation = yup.object().shape({
		username: yup.string().required('Username is required!'),
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
	const onSubmit = value => {
		dispatch(
			authActions.setCurrentUser({
				username: 'admin'
			})
		);
		navigate('/home');
	};

	return (
		<div className="login-container">
			<form className="login" onSubmit={handleSubmit(onSubmit)}>
				<div className="login-header">
					<img
						src="/media/login/avatar.png"
						alt="Login"
						className="login-icon"
					/>
					<div className="login-title">LOGIN</div>
				</div>

				<div className="login-body">
					<div className="login-error">{error}</div>
					<FormFieldControlGroup
						label={{ element: 'Username', required: true }}
						element={{
							control,
							name: 'username',
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
								src: showPassword
									? '/media/login/view-pass.png'
									: '/media/login/hide-pass.png',
								onClick: () => {
									setShowPassword(!showPassword);
								}
							}
						}}
						className="password mb-3"
					/>
					<FormFieldCheckGroup
						element={{
							control,
							name: 'isRemember',
							options: [{ value: 'true', label: 'Remember me' }]
						}}
						className="mb-3"
					/>
					<ButtonIconSplit
						iconStart={{
							type: 'css',
							className: 'fas fa-sign-in'
						}}
						element="Login"
						type="submit"
						className="btn-block"
					/>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;

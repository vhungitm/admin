import AdminLayout from 'components/Layout/AdminLayout';
import LoginPage from 'features/Auth/pages/LoginPage';
import HomePage from 'features/Home/pages/HomePage';

const DefaultLayout = ({ element }) => {
	return <>{element}</>;
};

export const routes = [
	{
		name: 'login',
		path: '/login',
		exact: true,
		layout: DefaultLayout,
		element: LoginPage
	},
	{
		name: 'home',
		path: '/',
		exact: true,
		layout: AdminLayout,
		element: HomePage
	},
	{
		name: 'home2',
		path: '/home',
		exact: true,
		layout: AdminLayout,
		element: HomePage
	}
];

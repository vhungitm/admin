import AdminLayout from 'components/Layout/AdminLayout';
import NotFoundPage from 'features/404/pages/404Page';
import LoginPage from 'features/Auth/pages/LoginPage';
import HomePage from 'features/Home/pages/HomePage';
import NewsPage from 'features/News/pages/NewsPage';
import NewsUpdatePage from 'features/News/pages/NewsUpdatePage';

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
	},
	{
		name: 'news',
		path: '/news',
		exact: true,
		layout: AdminLayout,
		element: NewsPage
	},
	{
		name: 'newsUpdate',
		path: '/news/update/:newsId',
		exact: true,
		layout: AdminLayout,
		element: NewsUpdatePage
	},
	{
		name: 'notFound',
		path: '*',
		exact: false,
		layout: DefaultLayout,
		element: NotFoundPage
	}
];

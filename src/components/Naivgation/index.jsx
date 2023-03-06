import LoginPage from 'features/Auth/pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './data';

const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(item => (
					<Route
						key={item.name}
						path={item.path}
						exact={item.exact}
						element={<item.layout element={<item.element />} />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;

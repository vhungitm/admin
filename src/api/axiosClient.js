import axios from 'axios';
import cookies from 'js-cookie';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL, // "https://staging-api.tmasolutions.com" || process.env.REACT_APP_API_URL
	headers: { 'content-type': 'application/json' }
});

axiosClient.interceptors.request.use(async config => {
	const token = cookies.get('token');

	if (token) config.headers.Authorization = `Bearer ${token}`;

	return config;
});

axiosClient.interceptors.response.use(
	response => response?.data || response,
	error => error?.response?.data || error
);

export default axiosClient;

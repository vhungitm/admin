import axios from 'axios';
import queryString from 'query-string';
import cookies from 'js-cookie';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: { 'content-type': 'application/json' },
	paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async config => {
	const token = JSON.parse(cookies.get('token'));

	if (token) config.headers.Authorization = `Bearer ${token}`;

	return config;
});

axiosClient.interceptors.response.use(
	response => response?.data || response,
	error => error?.response?.data || error
);

export default axiosClient;

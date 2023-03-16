import axiosClient from '../axiosClient';

const apiURL = '/Account';

const authAPI = {
	login: params => {
		const url = apiURL + '/authenticate';
		return axiosClient.post(url, params);
	}
};

export default authAPI;

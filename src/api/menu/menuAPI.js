import axiosClient from '../axiosClient';

const apiURL = '/Menu/';

const menuAPI = {
	getMenu: () => {
		const url = apiURL + 'menu-getmenu';
		return axiosClient.get(url);
	}
};

export default menuAPI;

import axiosClient from '../axiosClient';

const apiURL = '/News/news-';

const newsAPI = {
	getHeader: () => {
		const url = apiURL + 'getnewsheader';

		return axiosClient.get(url);
	},

	getCategories: () => {
		const url = apiURL + 'getnewstitle';

		return axiosClient.get(url);
	},

	getNews: categoryId => {
		const url = apiURL + 'getnews?categoryId=' + categoryId;

		return axiosClient.get(url);
	},

	getDetail: newsId => {
		const url = apiURL + 'getdetail?newsId=' + newsId;

		return axiosClient.get(url);
	}
};

export default newsAPI;

import { ButtonIconSplit } from 'components/ITM';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';

const NewsPage = () => {
	const [tabActiveId, setTabActiveId] = useState(0);
	const [categoriesData, setCategoriesData] = useState([]);
	const [newsAllData, setNewsAllData] = useState([]); // All data from api
	const [newsData, setNewsData] = useState([]); // Data after it is handled
	const [reload, onReLoad] = useState(); // Reload data
	const [isLoading, setIsLoading] = useState(false); // Loading data

	// Page data
	const [currPage, setCurrPage] = useState(0);
	const [totalPages, setTotalPages] = useState(4);

	// Effect update categories data
	useState(() => {
		const fetchData = async () => {
			setIsLoading(true);

			const res = {
				data: [
					{ categoryId: 0, name: 'All' },
					{ categoryId: 1, name: 'Company News' },
					{ categoryId: 2, name: 'Industry News' }
				]
			};

			setTimeout(() => {
				setTabActiveId(res?.data?.[0].categoryId);
				setCategoriesData(res?.data);
				setIsLoading(false);
			}, [500]);
		};

		fetchData();
	}, [reload]);

	// Effect update news data
	useEffect(() => {
		const fetchData = async () => {
			// Load news data when categories data is loaded
			if (categoriesData.length <= 0) return;

			setIsLoading(true);
			const res = {
				data: [
					{
						newsId: 0,
						title: 'The Difference between Robotic Process Automation (RPA) and AI',
						imageThumbnail: 'Img',
						createdDate: '01/01/2022'
					},
					{
						newsId: 1,
						title: 'The Difference between Robotic Process Automation (RPA) and AI',
						imageThumbnail: 'Img',
						createdDate: '01/01/2022'
					},
					{
						newsId: 2,
						title: 'The Difference between Robotic Process Automation (RPA) and AI',
						imageThumbnail: 'Img',
						createdDate: '01/01/2022'
					},
					{
						newsId: 3,
						title: 'The Difference between Robotic Process Automation (RPA) and AI',
						imageThumbnail: 'Img',
						createdDate: '01/01/2022'
					},
					{
						newsId: 4,
						title: 'The Difference between Robotic Process Automation (RPA) and AI',
						imageThumbnail: 'Img',
						createdDate: '01/01/2022'
					},
					{
						newsId: 5,
						title: 'The Difference between Robotic Process Automation (RPA) and AI',
						imageThumbnail: 'Img',
						createdDate: '01/01/2022'
					}
				]
			};

			setTimeout(() => {
				setIsLoading(false);
				setNewsData(res.data);
				setCurrPage(0);
			}, 500);
		};

		fetchData();
	}, [tabActiveId, categoriesData]);

	const loadingJSX = <Loading />;
	const newsListJSX = (
		<>
			<NewsList data={newsData} />
			<Pagination currPage={currPage} setCurrPage={setCurrPage} totalPages={totalPages} />
		</>
	);
	const noDataJSX = <div>no data</div>;
	const pageBodyJSX = isLoading ? loadingJSX : newsData.length > 0 ? newsListJSX : noDataJSX;

	return (
		<div className="news">
			<div className="page-header">
				<div className="page-header-title">News</div>
				<div className="page-header-buttons">
					<ButtonIconSplit iconStart={{ type: 'css', className: 'fas fa-plus' }} element="Create news" />
				</div>
			</div>

			<div className="page-card">
				<div className="page-card-header">
					<div className="page-card-tab">
						{categoriesData.map(item => (
							<div
								key={item.categoryId}
								className={'page-card-tab-item ' + (tabActiveId === item.categoryId ? 'is-active' : '')}
								onClick={() => setTabActiveId(item.categoryId)}
							>
								{item.name}
							</div>
						))}
					</div>
				</div>
				<div className="page-card-body">{pageBodyJSX}</div>
			</div>
		</div>
	);
};

export default NewsPage;

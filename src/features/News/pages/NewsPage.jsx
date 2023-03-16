import newsAPI from 'api/news/newsAPI';
import { ButtonCircle, ButtonIconSplit } from 'itm-ui';
import Loading from 'components/Loading';
import NoData from 'components/Management/NoData';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCategoryUpdateModal from '../components/NewsCategoryUpdateModal';
import NewsDeleteModal from '../components/NewsDeleteModal';
import NewsList from '../components/NewsList';

const NewsPage = () => {
	const [tabActiveId, setTabActiveId] = useState(0);
	const [categoriesData, setCategoriesData] = useState([]);
	const [allData, setAllData] = useState([]); // All data from api
	const [data, setData] = useState([]); // Data after handled
	const [reload, onReLoad] = useState(); // Reload data
	const [isLoading, setIsLoading] = useState(false); // Loading data

	// Page data
	const [dataStartIndex, setDataStartIndex] = useState(0);
	const [currPage, setCurrPage] = useState(0);
	const [itemsPerPage] = useState(10);
	const [totalPages, setTotalPages] = useState(4);

	// Effect update categories data
	useState(() => {
		const fetchData = async () => {
			setIsLoading(true);

			const res = await newsAPI.getCategories(tabActiveId);

			setTabActiveId(res?.data?.[0].id);
			setCategoriesData(res?.data);
			setIsLoading(false);
		};

		fetchData();
	}, [reload]);

	// Effect update all data
	useEffect(() => {
		const fetchData = async () => {
			// Load news data when categories data is loaded
			if (categoriesData.length <= 0) return;

			setIsLoading(true);

			// Call api
			const res = await newsAPI.getNews(tabActiveId);

			setIsLoading(false);
			setAllData(res?.data);
			setCurrPage(0);
		};

		fetchData();
	}, [tabActiveId, categoriesData]);

	// Update all data => Update data
	useEffect(() => {
		const updateData = () => {
			let newData = [...allData];

			// Get data by current page
			const idStart = currPage * itemsPerPage;
			const idEnd = idStart + itemsPerPage;

			setDataStartIndex(idStart);
			newData = newData.filter((item, id) => id >= idStart && id < idEnd);

			// Update pagination
			const newTotalPages = Math.ceil(allData?.length / itemsPerPage);
			setTotalPages(newTotalPages);

			// Update new data
			setData(newData);
		};

		updateData();
	}, [allData, currPage, itemsPerPage]);

	// Update modal
	const [updatedData, setUpdatedData] = useState({ id: 0, title: '' });
	const [showCategoryUpdateModal, setShowCategoryUpdateModal] = useState(false);

	const onShowUpdateCategoryModal = item => {
		setShowCategoryUpdateModal(true);
		setUpdatedData(item);
	};
	const onCloseCategoryUpdateModal = () => {
		setShowCategoryUpdateModal(false);
	};

	// On update category data
	const onUpdateCategory = value => {
		console.log(value);
		onCloseCategoryUpdateModal();
	};

	// Delete
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const onShowDeleteModal = value => {
		setUpdatedData(value);
		setShowDeleteModal(true);
	};
	const onCloseDeleteModal = () => {
		setShowDeleteModal(false);
	};

	// Handle delete
	const onDelete = value => {
		onCloseDeleteModal();
		console.log(value);
	};

	// Handle JSX
	const loadingJSX = <Loading />;
	const newsListJSX = (
		<>
			<NewsList data={data} dataStartIndex={dataStartIndex} onShowDeleteModal={onShowDeleteModal} />
			<Pagination currPage={currPage} setCurrPage={setCurrPage} totalPages={totalPages} />
		</>
	);
	const noDataJSX = <NoData />;
	const pageBodyJSX = isLoading ? loadingJSX : data.length > 0 ? newsListJSX : noDataJSX;

	return (
		<div className="news">
			<div className="page-header">
				<div className="page-header-title">News</div>
				<div className="page-header-buttons">
					<Link to="/news/create">
						<ButtonIconSplit iconStart={{ type: 'css', className: 'fas fa-plus' }} element="Create news" />
					</Link>
				</div>
			</div>

			<div className="page-card">
				<div className="page-card-header">
					<div className="page-card-tab">
						{categoriesData.map(item => (
							<div
								key={item.id}
								className={'page-card-tab-item ' + (tabActiveId === item.id ? 'is-active' : '')}
							>
								<div className="page-card-tab-item-title" onClick={() => setTabActiveId(item.id)}>
									{item.title}
								</div>

								<ButtonCircle
									icon={<img src="/media/management/edit.png" width={20} height={20} alt="Edit" />}
									title="Rename"
									className="bg-white page-card-tab-button"
									onClick={() => onShowUpdateCategoryModal(item)}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="page-card-body">{pageBodyJSX}</div>

				<NewsCategoryUpdateModal
					data={updatedData}
					show={showCategoryUpdateModal}
					onClose={onCloseCategoryUpdateModal}
					onSubmit={onUpdateCategory}
				/>
				<NewsDeleteModal
					data={updatedData}
					show={showDeleteModal}
					onClose={onCloseDeleteModal}
					onSubmit={onDelete}
				/>
			</div>
		</div>
	);
};

export default NewsPage;

import { ButtonCircle, ButtonIconSplit } from 'components/ITM';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
	const [activeId, setActiveId] = useState(0);
	const [data, setData] = useState();

	useState(() => {
		const fetchData = async () => {
			const res = {
				categories: [
					{ categoryId: 0, categoryName: 'All' },
					{ categoryId: 1, categoryName: 'Company News' },
					{ categoryId: 2, categoryName: 'Industry News' }
				]
			};

			setActiveId(res?.categories?.[0].categoryId);
			setData(res);
		};

		fetchData();
	});

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
						{data?.categories?.map(item => (
							<div
								key={item.categoryId}
								className={'page-card-tab-item ' + (activeId === item.categoryId ? 'is-active' : '')}
								onClick={() => setActiveId(item.categoryId)}
							>
								{item.categoryName}
							</div>
						))}
					</div>
				</div>
				<div className="page-card-body">
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Thumbnail</th>
								<th>Title</th>
								<th>Created Date</th>
								<th className="controls">Controls</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>0</td>
								<td>Img</td>
								<td>The Difference between Robotic Process Automation (RPA) and AI</td>
								<td>29/12/2021</td>
								<td className="controls">
									<Link to={`/news/update`}>
										<ButtonCircle
											icon={
												<img
													src="/media/management/edit.png"
													width={24}
													height={24}
													alt="Edit"
												/>
											}
											title="Edit"
										/>
									</Link>
									<ButtonCircle
										icon={
											<img src="/media/management/delete.png" width={28} height={28} alt="Edit" />
										}
										title="Delete"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default NewsPage;

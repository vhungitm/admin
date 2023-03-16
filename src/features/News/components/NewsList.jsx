import { ButtonCircle } from 'itm-ui';
import { Link } from 'react-router-dom';
import { convertDateJSONToString } from 'utils/common';

const NewsList = props => {
	const { data, dataStartIndex, onShowDeleteModal } = props;

	return (
		<table>
			<thead>
				<tr>
					<th className="text-center">No.</th>
					<th>Thumbnail</th>
					<th>Title</th>
					<th>Created Date</th>
					<th className="controls">Controls</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={item.newsId}>
						<td align="center">{dataStartIndex + index + 1}</td>
						<td>
							<img
								src={
									item.thumbnail
										? process.env.REACT_APP_URL + item.thumbnail
										: '/media/management/no-photo.png'
								}
								width={100}
								className="border rounded"
								alt="Thumbnail"
							/>
						</td>
						<td>{item.title}</td>
						<td>{convertDateJSONToString(item.createdDate)}</td>
						<td>
							<div className="controls">
								<Link to={`/news/update/${item.newsId}`}>
									<ButtonCircle
										icon={
											<img src="/media/management/edit.png" width={20} height={20} alt="Edit" />
										}
										title="Edit"
									/>
								</Link>
								<ButtonCircle
									icon={<img src="/media/management/delete.png" width={24} height={24} alt="Edit" />}
									title="Delete"
									onClick={() => onShowDeleteModal(item)}
								/>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NewsList;

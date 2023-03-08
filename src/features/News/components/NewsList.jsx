import { ButtonCircle } from 'components/ITM';
import { Link } from 'react-router-dom';

const NewsList = props => {
	const { data } = props;

	return (
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
				{data.map(item => (
					<tr key={item.newsId}>
						<td>{item.newsId}</td>
						<td>{item.imageThumbnail}</td>
						<td>{item.title}</td>
						<td>{item.createdDate}</td>
						<td className="controls">
							<Link to={`/news/update`}>
								<ButtonCircle
									icon={<img src="/media/management/edit.png" width={20} height={20} alt="Edit" />}
									title="Edit"
								/>
							</Link>
							<ButtonCircle
								icon={<img src="/media/management/delete.png" width={24} height={24} alt="Edit" />}
								title="Delete"
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NewsList;

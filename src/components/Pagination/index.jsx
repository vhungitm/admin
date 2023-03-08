import './index.scss';

const Pagination = ({ currPage, setCurrPage, totalPages }) => {
	const paginationItems = [];
	for (let i = 0; i < totalPages; i++) {
		let className = 'page-item';
		if (currPage === i) className += ' is-active';

		paginationItems.push(
			<div className={className} key={i} onClick={() => setCurrPage(i)}>
				{i + 1}
			</div>
		);
	}

	const onFirst = () => {
		if (currPage > 0) setCurrPage(0);
	};
	const onPrev = () => {
		if (currPage > 0) setCurrPage(currPage - 1);
	};
	const onNext = () => {
		if (currPage < totalPages - 1) setCurrPage(currPage + 1);
	};
	const onLast = () => {
		if (currPage < totalPages - 1) setCurrPage(totalPages - 1);
	};

	return (
		<div className="pagination-container">
			<div className={`page-item first ${currPage === 0 ? ' is-disabled' : ''}`} onClick={onFirst} />
			<div className={`page-item prev ${currPage === 0 ? 'is-disabled' : ''}`} onClick={onPrev} />

			{paginationItems}

			<div className={`page-item next ${currPage === totalPages - 1 ? 'is-disabled' : ''}`} onClick={onNext} />
			<div className={`page-item last ${currPage === totalPages - 1 ? 'is-disabled' : ''}`} onClick={onLast} />
		</div>
	);
};

export default Pagination;

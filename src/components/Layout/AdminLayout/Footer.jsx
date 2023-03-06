import './Footer.scss';

const Footer = () => {
	const nowYear = new Date().getFullYear();

	return (
		<footer>
			&copy; {nowYear}, TMA Solutions
			<i className="fa fa-heart heart"></i>
		</footer>
	);
};

export default Footer;

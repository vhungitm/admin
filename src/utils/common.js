export const convertDateJSONToString = dateJSON => {
	const date = new Date(dateJSON);
	let year = date.getFullYear();

	let month = date.getMonth() + 1;
	if (month < 10) month = '0' + month;

	let day = date.getDate();
	if (day < 10) day = '0' + day;

	const str = day + '/' + month + '/' + year;

	return str;
};

export const convertToMetaTilte = str => {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/đ/g, 'd')
		.replace(/Đ/g, 'd')
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.replace(/\s+/g, ' ')
		.replace(/[\ ]/g, '-')
		.toLowerCase();
};

export const validateEmail = email => {
	const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

	if (email.match(patternEmail)) return true;
	return false;
};

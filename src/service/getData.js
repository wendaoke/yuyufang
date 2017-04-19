import fetch from '../config/fetch'

	var queryDiaoDian = () => fetch('GET', '/diaodian/list', {
		start: 1,
	});

	export {queryDiaoDian}
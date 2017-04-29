import fetch from '../config/fetch'

var queryDiaoDian = () => fetch('GET', '/diaodian/list', {
	start: 1,
});
var queryDiaoDianDetail = (diaodianid) => fetch('POST', '/diaodian/detail/'+diaodianid, {
});
export {queryDiaoDian,queryDiaoDianDetail}
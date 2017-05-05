import fetch from '../config/fetch'

var queryDiaoDian = (pageSize,currentPage,queryString) => fetch('GET', '/diaodian/list', {
	pageSize: pageSize,
	currentPage:currentPage,
    queryString:queryString		
});
var queryDiaoDianDetail = (diaodianid) => fetch('POST', '/diaodian/detail/'+diaodianid, {
});
var queryDiaoDianCommentList = (pageSize,currentPage,itemId) => fetch('GET', '/diaodian/comment/list', {
	pageSize: pageSize,
	currentPage:currentPage,
    itemId:itemId		
});
export {queryDiaoDian,queryDiaoDianDetail,queryDiaoDianCommentList}
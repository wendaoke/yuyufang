import fetch from '../config/fetch'

var queryDiaoDian = (pageSize,currentPage,queryString) => fetch('GET', '/diaodian/list', {
	pageSize: pageSize,
	currentPage:currentPage,
    queryString:queryString		
});
var queryDiaoDianDetail = (diaodianid) => fetch('POST', '/diaodian/detail/'+diaodianid, {
});
var queryCommentList = (pageSize,currentPage,type,itemId) => fetch('GET', '/diaodian/comment/list', {
	pageSize: pageSize,
	currentPage:currentPage,
	type,type,
    itemId:itemId		
});
var addComment = (itemId,userId,type,comment) => fetch('POST', '/diaodian/comment/add', {
	item_id: itemId,
	commentator_id:userId,
	type,type,
    content:comment		
});
export {queryDiaoDian,queryDiaoDianDetail,queryCommentList,addComment}
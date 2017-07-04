import fetch from '../config/fetch'

var queryDiaoHuo = (pageSize, currentPage, queryString) => fetch('GET', '/diaohuo/list', {
    pageSize: pageSize,
    currentPage: currentPage,
    queryString: queryString
});
var queryDiaoHuoDetail = (id) => fetch('POST', '/diaohuo/detail/' + id, {});
var queryRecommendDiaoHuo = () => fetch('GET', '/diaohuo/recommend', {});
export { queryDiaoHuo, queryDiaoHuoDetail, queryRecommendDiaoHuo }
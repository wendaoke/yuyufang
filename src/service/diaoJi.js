import fetch from '../config/fetch'

var queryDiaoJi = (pageSize, currentPage, queryString) => fetch('GET', '/diaoji/list', {
    pageSize: pageSize,
    currentPage: currentPage,
    queryString: queryString
});
var queryDiaoJiDetail = (id) => fetch('POST', '/diaoji/detail/' + id, {});
var queryRecommendDiaoJi = () => fetch('GET', '/diaoji/recommend', {});
export { queryDiaoJi, queryDiaoJiDetail, queryRecommendDiaoJi }
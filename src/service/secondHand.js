import fetch from '../config/fetch'
var addSecondHand = (secondHand) => fetch('POST', '/secondhand/add', {
    id: secondHand.id,
    title: secondHand.title,
    content: secondHand.content,
    province: secondHand.province,
    city: secondHand.city,
    area: secondHand.area,
    address: secondHand.address,
    contactWay: secondHand.contactWay,
    contactInfo: secondHand.contactInfo
});
var querySecondHand = (pageSize, currentPage, queryString) => fetch('GET', '/secondhand/list', {
    pageSize: pageSize,
    currentPage: currentPage,
    queryString: queryString
});
var querySecondHandDetail = (id) => fetch('POST', '/secondhand/detail/' + id, {});
export { addSecondHand, querySecondHand, querySecondHandDetail }
import fetch from '../config/fetch'
var getCurrentUser = () => fetch('POST', '/user/getcurrentuser', {});
var updateExtraInfo = (userExtraInfo) => fetch('POST', '/user/updateextrainfo', {
    birthday: userExtraInfo.birthday,
    phone: userExtraInfo.phone,
    postcode: userExtraInfo.postcode,
    address: userExtraInfo.address
});
export { getCurrentUser, updateExtraInfo }
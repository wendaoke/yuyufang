import fetch from '../config/fetch'

var checkUser = () => fetch('GET', '/weixin/checkuser', {});
export { checkUser }
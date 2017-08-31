import fetch from '../config/fetch'

var checkUser = (redirect) => fetch('GET', '/weixin/checkuser', {
    redirect: redirect
});
export { checkUser }
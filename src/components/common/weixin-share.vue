<template>


</template>

<script>
import wx from 'weixin-js-sdk';
import {getsign} from '@/common/sign';
    export default {
    	data(){
            return{
                shareTitle:'悠仙渔乐，赏人间悦事，驭水间巨物',
            }
        },
        props: ['shareDesc'],
	    mounted(){
            let shareTitleTxt = this.shareTitle;
            let shareDescTxt = this.shareDesc;
            let jsapi_ticket = '';
            let appId = 'wxd152e4bb6dc6a986';
            let urllink = window.location.href;
            let thu_image='http://img.you-xian.com/logo.png';

            this.axios.get("/weixin/getjsticket").then((response) => {
                jsapi_ticket =  response.data ;         
                let sign = getsign(jsapi_ticket, urllink.split('#')[0]);
                wx.config({
                    debug: false,
                    appId: appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
                    timestamp:sign.timestamp, // 必填，生成签名的时间戳
                    nonceStr: sign.nonceStr, // 必填，生成签名的随机串
                    signature: sign.signature,// 必填，签名，见附录1
                    //需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
                    jsApiList: [
                        'onMenuShareAppMessage','onMenuShareTimeline',
                        'onMenuShareQQ','onMenuShareQZone'
                    ]
                });
            })
            //处理验证失败的信息
            wx.error(function (res) {
                console.log('验证失败返回的信息:',res);
            });
            //处理验证成功的信息
            wx.ready(function () {
            //分享到朋友圈
            wx.onMenuShareTimeline({
                title: shareTitleTxt, // 分享标题
                link: urllink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: thu_image, // 分享图标
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                    console.log("分享到朋友圈成功返回的信息为:",res);
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                    console.log("取消分享到朋友圈返回的信息为:",res);
                }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
                title: shareTitleTxt, // 分享标题
                desc: shareDescTxt, // 分享描述
                link: urllink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: thu_image, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                    console.log("分享给朋友成功返回的信息为:",res);
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                    console.log("取消分享给朋友返回的信息为:",res);
                }
            });
            //分享到QQ
            wx.onMenuShareQQ({
                title: shareTitleTxt, // 分享标题
                desc: shareDescTxt, // 分享描述
                link: urllink, // 分享链接
                imgUrl: thu_image, // 分享图标
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                    console.log("分享到QQ好友成功返回的信息为:",res);
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                    console.log("取消分享给QQ好友返回的信息为:",res);
                }
            });

            //分享到QQ空间
            wx.onMenuShareQZone({
                title: shareTitleTxt, // 分享标题
                desc: shareDescTxt, // 分享描述
                link: urllink, // 分享链接
                imgUrl: thu_image, // 分享图标
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                    console.log("分享到QQ空间成功返回的信息为:",res);
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                    console.log("取消分享到QQ空间返回的信息为:",res);
                }
            });
            });

		},
        methods: {

        }
    }
</script>

<style >

</style>

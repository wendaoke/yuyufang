<template>
    <div class="weui-tabbar">
        备案号：
        <a href="http://www.miitbeian.gov.cn" class="weui-tabbar__item" >
            <p class="weui-tabbar__label bigsize">苏ICP备16009079号</p>
        </a>        
    </div>

</template>

<script>
import $ from 'n-zepto'
    export default {
    	data(){
            return{

            }
        },
	    created: function () {

		},
        methods: {
        	switchMenu: function (event) {
		      // `event` 是原生 DOM 事件
		      alert(event.target.tagName);
		      $(event.target).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
		    }
        }
    }
</script>

<style >
.bigsize {
    font-weight:bold;
    font-size:20px; 
}
</style>

<template>
    <div class="weui-tabbar">
        <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on" v-on:click="switchMenu">
            <span style="display: inline-block;position: relative;">
                <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            </span>
            <p class="weui-tabbar__label">微信</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item" v-on:click="switchMenu">
            <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">通讯录</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item" v-on:click="switchMenu">
            <span style="display: inline-block;position: relative;">
                <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
            </span>
            <p class="weui-tabbar__label">发现</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item" v-on:click="switchMenu">
            <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">我</p>
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

</style>

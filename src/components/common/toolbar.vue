<template>
    <div class="weui-tabbar">
        <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on" v-on:click="switchMenu('1')" id="weui-tabbar-item-1">
            <router-link to="/home"  > 
                <span style="display: inline-block;position: relative;">
                    <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                </span>
                <p class="weui-tabbar__label">首页</p>
            </router-link>
        </a>
        <a href="javascript:;" class="weui-tabbar__item"  v-on:click="switchMenu('2')" id="weui-tabbar-item-2">
            <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">附近</p>
        </a>
        <!--
        <a href="javascript:;" class="weui-tabbar__item" v-on:click="switchMenu">
            <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">发现</p>
        </a>
        -->
        <a href="javascript:;" class="weui-tabbar__item " v-on:click="switchMenu('3')" id="weui-tabbar-item-3">
 			<router-link to="/aboutme"  >           
                <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">我</p>
 			</router-link>
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
        	switchMenu: function (index) {
		      // `event` 是原生 DOM 事件
		    //    alert(event.target.tagName);
		      $("#weui-tabbar-item-"+index).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
		    }
        }
    }
</script>

<style >

</style>

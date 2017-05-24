<template>
    <div class="weui-grids">
	    <!-- 第一个宫格 -->
	    <a href="#" class="weui-grid">
	        <!-- 图标 -->
	        <div class="weui-grid__icon">
	            <img src="/static/images/icon_tabbar.png" alt="">
	        </div>
	        <!-- 标签文字 -->
	        <p class="weui-grid__label">钓场</p>
	    </a>
	    <!-- 第二个宫格 -->
	    <a href="#" class="weui-grid">
	        <!-- 图标 -->
	        <div class="weui-grid__icon">
	            <img src="/static/images/icon_tabbar.png" alt="">
	        </div>
	        <!-- 标签文字 -->
	        <p class="weui-grid__label">渔具店</p>
	    </a>
	    <!-- 第三个宫格 -->
	    <a href="#" class="weui-grid">
	        <!-- 图标 -->
	        <div class="weui-grid__icon">
	            <img src="/static/images/icon_tabbar.png" alt="">
	        </div>
	        <!-- 标签文字 -->
	        <p class="weui-grid__label">转让</p>
	    </a>
	    <!-- 第四个宫格 -->
	    <a href="#" class="weui-grid">
	        <!-- 图标 -->
	        <div class="weui-grid__icon">
	            <img src="/static/images/icon_tabbar.png" alt="">
	        </div>
	        <!-- 标签文字 -->
	        <p class="weui-grid__label">钓技</p>
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

        }
    }
</script>

<style >
.weui-grid {
    position: relative;
    float: left;
    padding: 2px 1px;
    width: 25%;
    box-sizing: border-box;
    margin-top: 2px;
}
.weui-footer, .weui-grid__label {
    text-align: center;
    font-size: 10px;
}
</style>

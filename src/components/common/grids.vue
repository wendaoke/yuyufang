<template>
    <div class="weui-grids">
	    <!-- 第一个宫格 -->
	    <a href="#" class="weui-grid">
			<router-link to="/diaodian/list"  >
				<!-- 图标 -->
				<div class="weui-grid__icon">
					<img src="/static/images/icon_tabbar.png" alt="">
				</div>
				<!-- 标签文字 -->
				<p class="weui-grid__label">钓场</p>			
			</router-link>
	    </a>

		<!-- 第三个宫格 -->
	    <a href="#" class="weui-grid">
			<router-link to="/secondhand/list"  >
	        <!-- 图标 -->
	        <div class="weui-grid__icon">
	            <img src="/static/images/icon_tabbar.png" alt="">
	        </div>
	        <!-- 标签文字 -->
	        <p class="weui-grid__label">淘淘</p>
			</router-link>			
	    </a>
	    <!-- 第四个宫格 -->
	    <a href="#" class="weui-grid">
			<router-link to="/diaoji/list"  >
	        <!-- 图标 -->
	        <div class="weui-grid__icon">
	            <img src="/static/images/icon_tabbar.png" alt="">
	        </div>
	        <!-- 标签文字 -->
	        <p class="weui-grid__label">钓技</p>
			</router-link>
	    </a>
	    <!-- 第五个宫格 -->
	    <a href="#" class="weui-grid">
			<router-link to="/diaohuo/list"  >			
	        <!-- 图标 -->
	        <div class="weui-grid__icon">
	            <img src="/static/images/icon_tabbar.png" alt="">
	        </div>
	        <!-- 标签文字 -->
	        <p class="weui-grid__label">钓获</p>
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

        }
    }
</script>

<style scoped>
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

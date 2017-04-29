<template>
	<div class="page">
	    <div class="page__bd">
	        <div class="weui-search-bar" id="searchBar">
	            <form class="weui-search-bar__form">
	                <div class="weui-search-bar__box">
	                    <i class="weui-icon-search"></i>
	                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required/>
	                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
	                </div>
	                <label class="weui-search-bar__label" id="searchText">
	                    <i class="weui-icon-search"></i>
	                    <span>搜索</span>
	                </label>
	            </form>
	            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
	        </div>

	    </div>
	</div>
</template>

<script>
import 'src/plugins/jquery.min.js'
import 'src/plugins/diaodian.js'
import 'src/style/weui.min.css'
import 'src/style/jquery-weui.min.css'
import 'src/style/demos.css'
    export default {
    	data(){
            return{

            }
        },
    }
</script>

<style >

</style>

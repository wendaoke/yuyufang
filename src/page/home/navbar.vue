<template>
    <div class="weui-tab">
        <div class="weui-navbar">
            <div class="weui-navbar__item weui-bar__item_on">
                选项一
            </div>
            <div class="weui-navbar__item">
                选项二
            </div>
            <div class="weui-navbar__item">
                选项三
            </div>
        </div>
        <div class="weui-tab__panel">

        </div>
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
	        $('.weui-navbar__item').on('click', function () {
	            $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
	        });
		},
        methods: {

        }
    }
</script>

<style >

</style>

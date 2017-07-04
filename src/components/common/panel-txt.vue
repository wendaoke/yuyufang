<template>
       <div class="weui-panel weui-panel_access">
            <slot name="title"></slot>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text" v-for="item in itemlst">
                    <router-link :to="{path:'/diaoji/detail' , query:{id:item.id} }"  >
                        <h4 class="weui-media-box__title">{{ item.title }}</h4>
                        <p class="weui-media-box__desc">{{ item.content }}</p>
                    </router-link>
                </div>                
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
        props: ['itemlst'],
	    created: function () {

		},
        methods: {

        }
    }
</script>

<style >
.weui-panel {
    background-color: #fff;
    margin-top: 2px;
    position: relative;
    overflow: hidden;
}
</style>

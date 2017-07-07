<template>
	<div class="weui-panel weui-panel_access">
	    
	    <slot name="title"></slot>
		<div class="weui-panel__bd">
			<div class="weui-media-box weui-media-box_small-appmsg">
				<div class="weui-cells">
					<router-link :to="{path:item.link}" v-for="item in itemlst" :key="item.link" class="weui-cell weui-cell_access">						
						<div class="weui-cell__bd weui-cell_primary">
							<p>{{ item.title }}</p>
						</div>
						<span class="weui-cell__ft"></span>
					</router-link>
				</div>
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

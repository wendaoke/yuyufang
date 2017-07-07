<template>
	<div class="page">
	    <div class="page__bd" style="height: 100%;">
	        <div class="weui-tab">
	            <div class="weui-tab__panel">
					<panelthumbnail :itemlst="itemlst">
					    <div class="weui-panel__hd" slot="title">欢迎来到悠仙渔坊！</div>					   
       				</panelthumbnail>
	            </div>
      			<toolbar></toolbar>
	        </div>
	    </div>
	</div>
</template>

<script>


import toolbar from '@/components/common/toolbar'
import panelthumbnail from '@/components/common/panel-thumbnail'


export default {
	data () {
	    return {
			itemlst:[],
	    }
	  },
	mounted(){
		this.itemlst = [
			{title:'我的信息',link:'/aboutme/myinfo'},
			{title:'我的渔淘',link:'/secondhand/mylst'},			
		];
	},
    components:{
        'toolbar':toolbar,
        'panelthumbnail':panelthumbnail,
    },	    
	methods: {
   	   
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

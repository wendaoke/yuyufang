<template>
	<div class="page">
	    <div class="page__bd" style="height: 100%;">
	        <div class="weui-tab">
	            <div class="weui-tab__panel">
	                <searchbar v-on:message="search"></searchbar>
      				<grids></grids>
       				<paneltime></paneltime>     				
      				<panelpic></panelpic>
      				<paneltxt></paneltxt>

	            </div>
      			<toolbar></toolbar>
	        </div>
	    </div>
	</div>
</template>

<script>


import toolbar from '@/components/common/toolbar'
import searchbar from '@/components/common/searchbar'
import grids from '@/components/common/grids'
import panelpic from '@/components/common/panel-pic'
import paneltxt from '@/components/common/panel-txt'
import paneltime from '@/components/common/panel-time'
export default {
	data () {
	    return {

	    }
	  },
	mounted(){
   
	},
    components:{
        'toolbar':toolbar,
        'searchbar':searchbar,
        'grids':grids,
        'panelpic':panelpic,
        'paneltxt':paneltxt,
        'paneltime':paneltime,        
    },	    
	methods: {
      search: function (text) {

      }
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

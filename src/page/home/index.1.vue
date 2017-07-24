<template>
	<div class="page">
	    <div class="page__bd" style="height: 100%;">
	        <div class="weui-tab">
	            <div class="weui-tab__panel">
	                <searchbar v-on:message="search"></searchbar>
      				<grids></grids>
					<paneltime :itemlst="secondhandlst">
					<div class="weui-panel__ft" slot="title">
						<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
							<div class="weui-cell__bd">今日精选</div>
							<router-link to="/secondhand/list"  ><span class="weui-cell__ft"></span></router-link>
						</a>    
					</div>					   
       				</paneltime>
       				<panelpic :itemlst="diaohuolst">
					<div class="weui-panel__ft" slot="title">
						<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
							<div class="weui-cell__bd">精彩渔获</div>
							<router-link to="/diaohuo/list"  ><span class="weui-cell__ft"></span></router-link>
						</a>    
					</div>
      				</panelpic>     				
      				<paneltxt :itemlst="diaojilst">
					<div class="weui-panel__ft	" slot="title">
						<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
							<div class="weui-cell__bd">精彩好文</div>
							<router-link to="/diaoji/list"  ><span class="weui-cell__ft"></span></router-link>
						</a>    
					</div>
	  				</paneltxt>

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
import {queryRecommendSecondHand} from '@/service/secondHand'
import {queryRecommendDiaoJi} from '@/service/diaoJi'
import {queryRecommendDiaoHuo} from '@/service/diaoHuo'
export default {
	data () {
	    return {
			secondhandlst:[],
			diaojilst:[],
			diaohuolst:[],
	    }
	  },
	mounted(){
		this.querySecondHandList();
		this.queryDiaoJiList();
		this.queryDiaoHuoList();
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

		},
		async querySecondHandList(){ 
          this.secondhandlst = await queryRecommendSecondHand();
       },
		async queryDiaoJiList(){ 
          this.diaojilst = await queryRecommendDiaoJi();
       },
		async queryDiaoHuoList(){ 
          this.diaohuolst = await queryRecommendDiaoHuo();
       },	   	   
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

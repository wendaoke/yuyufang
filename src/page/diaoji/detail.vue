<template>
	<div class="container" id="container">
		<div class="page article js_show">
			<div class="page__hd">
				<h3 class="page__title">{{diaojidetail.title}}</h3>
			</div>
			<div class="page__bd">
				<article class="weui-article">
						<section>
							<p>
								{{diaojidetail.content}}
							</p>
						</section>
				</article>
			</div>
			<carousel  :current-view.sync="diaojidetail.images" :inputValue="diaojidetail.images"></carousel>

      	
        	<commentlist></commentlist>
			<div class="page__ft j_bottom" style="margin: 20px 0;">
				<a href="javascript:void()"></a>
			</div>
		</div>
	</div>
</template>

<script>
import {queryDiaoJiDetail} from '@/service/diaoJi'
import carousel from '@/components/common/carousel'
import commentlist from '@/components/comment/commentlist'
export default {
	data () {
	    return {
	      diaojidetail:{},
	    }
	  },
	mounted(){
	    this.initData();
	    },
	components:{
	    'carousel':carousel,
	    'commentlist':commentlist,	
        
	},
	methods: {
	    async initData(){
	    	let diaoJiId = this.$route.query.id;
		    // 获取详情
		    if(null != diaoJiId){
		    	this.diaojidetail = await queryDiaoJiDetail(diaoJiId);
		    }

		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

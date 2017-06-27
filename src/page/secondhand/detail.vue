<template>
	<div class="container" id="container">
		<div class="page article js_show">
			<div class="page__hd">
				<h3 class="page__title">{{secondHandDetail.title}}</h3>
			</div>
			<div class="page__bd">
				<article class="weui-article">
						<section>
							<p>
								{{secondHandDetail.content}}
							</p>
						</section>
				</article>
			</div>
			<carousel  :current-view.sync="secondHandDetail.images" :inputValue="secondHandDetail.images"></carousel>
        	<commentlist></commentlist>
			<div class="page__ft j_bottom" style="margin: 20px 0;">
				<a href="javascript:void()"></a>
			</div>
		</div>
	</div>
</template>

<script>
import {querySecondHandDetail} from '@/service/secondHand'
import carousel from '@/components/common/carousel'
import commentlist from '@/components/comment/commentlist'
export default {
	data () {
	    return {
	      secondHandDetail:{},
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
	    	let id = this.$route.params.id;
		    // 获取详情
		    if(null != id){
		    	this.secondHandDetail = await querySecondHandDetail(id);
		    }

		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

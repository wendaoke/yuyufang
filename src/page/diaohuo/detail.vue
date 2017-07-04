<template>
	<div class="container" id="container">
		<div class="page article js_show">
			<div class="page__hd">
				<h3 class="page__title">{{detail.title}}</h3>
			</div>
			<div class="page__bd">
				<article class="weui-article">
						<section>
							<p>
								{{detail.content}}
							</p>
						</section>
				</article>
			</div>
			<carousel  :current-view.sync="detail.images" :inputValue="detail.images"></carousel>

      	
        	<commentlist></commentlist>
			<div class="page__ft j_bottom" style="margin: 20px 0;">
				<a href="javascript:void()"></a>
			</div>
		</div>
	</div>
</template>

<script>
import {queryDiaoHuoDetail} from '@/service/diaoHuo'
import carousel from '@/components/common/carousel'
import commentlist from '@/components/comment/commentlist'
import 'src/style/weui.min.css'
export default {
	data () {
	    return {
	      detail:{},
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
	    	let id = this.$route.query.id;
			console.log(id);
		    // 获取详情
		    if(null != id){
		    	this.detail = await queryDiaoHuoDetail(id);
				console.log(this.detail);
		    }

		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

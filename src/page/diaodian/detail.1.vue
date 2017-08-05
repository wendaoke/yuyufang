<template>
	<div class="container" id="container">
		<div class="page article js_show">
			<div class="page__bd">
				<article class="weui-article">
						<h1 class="page__title">{{diaodiandetail.name}}</h1>
						<section>
							<p>
								{{diaodiandetail.fish_desc}}
							</p>
						</section>
				</article>
			</div>
			<carousel  :current-view.sync="diaodiandetail.images" :inputValue="diaodiandetail.images"></carousel>

      	
        	<commentlist></commentlist>
			<div class="page__ft j_bottom" style="margin: 20px 0;">
				<a href="javascript:void()"></a>
			</div>
		</div>
	</div>
</template>

<script>
import {queryDiaoDianDetail} from '@/service/getData'
import carousel from '@/components/common/carousel'
import commentlist from '@/components/comment/commentlist'
import 'src/style/weui.min.css'
import 'src/style/example.min.css'
export default {
	data () {
	    return {
	      diaodiandetail:{},
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
	    	let diaodianid = this.$route.params.diaodianid;
		    // 获取详情
		    if(null != diaodianid){
		    	this.diaodiandetail = await queryDiaoDianDetail(diaodianid);
		    }

		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

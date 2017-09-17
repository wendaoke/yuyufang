<template>
	<div class="container" id="container">
		<div class="page article js_show">
			<div class="page__hd">
				<h3 class="page__title">{{diaojidetail.title}}</h3>
			</div>
			<div class="page__bd" >
				<article class="weui-article">
						<section>
							<p v-html="diaojidetail.content">
							</p>
							<p>
							<img  v-bind:src="item.imageName"  v-bind:key="item.imageId" v-for="item in diaojidetail.images"/>
							</p>
						</section>
				</article>
			</div>
      	
        	<commentlist :itemId="diaoJiId"></commentlist>
        	<wxshare :shareDesc="shareDesc"  v-if="shareDesc" ></wxshare>			
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
import wxshare from '@/components/common/weixin-share'
import {createNonceStr} from '@/common/sign';
import {getsign} from '@/common/sign';
export default {
	data () {
	    return {
	      diaojidetail:{},
		  diaoJiId:'',
		  shareDesc:'',
	    }
	  },
	mounted(){
	    this.initData();
	    },
	components:{
	    'carousel':carousel,
	    'commentlist':commentlist,
		'wxshare':wxshare           
	},
	methods: {
	    async initData(){
	    	this.diaoJiId = this.$route.params.diaoJiId;
		    // 获取详情
		    if(null != this.diaoJiId){
		    	this.diaojidetail = await queryDiaoJiDetail(this.diaoJiId);
				this.shareDesc = this.diaojidetail.title;
		    }

		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

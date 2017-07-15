<template>
	<div class="container" id="container">
		<div class="page">
		    <div class="page__bd">
				<div class="weui-cells__title">请完善个人信息，以便向您提供更加优质的服务！</div>
		        <div class="weui_cells ">
					<div class="weui-cell weui-cell_vcode" >
						<div class="weui-cell__hd"><label class="weui-label">头像</label></div>
						<div class="weui-cell__bd">
						</div>
						<div class="weui-cell__ft">
							<img class="weui-vcode-img" :src="headimgurl" > </img>
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd"><label class="weui-label">昵称</label></div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" placeholder="纹刀客" value="纹刀客" readonly v-model="nickname">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd"><label for="" class="weui-label">生日</label></div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="date" value="" v-model="birthday">
						</div>
					</div>
					<div class="weui-cell ">
						<div class="weui-cell__hd">
							<label class="weui-label">手机号</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="tel" placeholder="请输入手机号"  v-model="phone">
						</div>
						<div class="weui-cell__ft">
						</div>
					</div>
					<div class="weui-cell ">
						<div class="weui-cell__hd">
							<label class="weui-label">邮编</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" placeholder="请输入邮编" v-model="postcode">
						</div>
						<div class="weui-cell__ft">
						</div>
					</div>						
					<div class="weui-cell ">
						<div class="weui-cell__hd">
							<label class="weui-label">地址</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" placeholder="请输入地址"  v-model="address">
						</div>
						<div class="weui-cell__ft">
						</div>
					</div>																				
					<div class="weui-btn-area">
						<a class="weui-btn weui-btn_primary" href="javascript:"  @click="submitForm()" >确定</a>
					</div>
				</div>
		    </div>
		 
		</div>
	</div>								
</template>

<script>
import {getCurrentUser, updateExtraInfo} from '@/service/getUser'
export default {
	data () {
	    return {
			userExtraInfo:{},
			headimgurl:'',
			nickname:'',
			birthday:'',
			phone:'',
			postcode:'',
			address:''
	    }
	  },
	mounted(){
		this.initData();
	},
    components:{

    },	    
	methods: {
		async initData(){
		    // 获取详情
		    	this.userExtraInfo = await getCurrentUser();
				if((null == this.userExtraInfo)||(null == this.userExtraInfo.user)){
					return;
				}
				headimgurl = this.userExtraInfo.user.headimgurl;
				nickname   = this.userExtraInfo.user.nickname;
				birthday   = this.userExtraInfo.birthday;
				phone      = this.userExtraInfo.phone;
				postcode   = this.userExtraInfo.postcode;
				address    = this.userExtraInfo.address;
		},
		submitForm(){
			this.userExtraInfo.birthday 	= this.birthday;
			this.userExtraInfo.phone		= this.phone;
			this.userExtraInfo.postcode 	= this.postcode;
			this.userExtraInfo.address	= this.address;
			let result = updateExtraInfo(this.userExtraInfo);
			console.log(result);
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

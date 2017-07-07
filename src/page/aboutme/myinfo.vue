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
							<img class="weui-vcode-img" src="https://team.weui.io/avatar/bear.jpg" />
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd"><label class="weui-label">昵称</label></div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" placeholder="纹刀客" value="纹刀客" readonly>
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd"><label for="" class="weui-label">生日</label></div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="date" value="">
						</div>
					</div>
					<div class="weui-cell ">
						<div class="weui-cell__hd">
							<label class="weui-label">手机号</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="tel" placeholder="请输入手机号">
						</div>
						<div class="weui-cell__ft">
						</div>
					</div>
					<div class="weui-cell ">
						<div class="weui-cell__hd">
							<label class="weui-label">地址</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" placeholder="请输入地址">
						</div>
						<div class="weui-cell__ft">
						</div>
					</div>																				
					<div class="weui-btn-area">
						<a class="weui-btn weui-btn_primary" href="javascript:"  >确定</a>
					</div>
				</div>
		    </div>
		 
		</div>
	</div>								
</template>

<script>
import 'src/style/weui.min.css'
export default {
	data () {
	    return {

	    }
	  },
	mounted(){

	},
    components:{

    },	    
	methods: {
   	   
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

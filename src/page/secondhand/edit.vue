<template>
	<div class="container" id="container">
		<div class="page">
		    <div class="page__bd">
		        <div class="weui-cells">
		            <div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入标题" v-model="title" v-validate="'required'"  name="title"/>
		                </div>
						<div class="weui-cell__ft" v-show="errors.has('title')">
							<i class="weui-icon-warn"></i>
						</div>						
		            </div>

		            <div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <textarea class="weui-textarea" placeholder="请输入描述" rows="3" v-model="description" v-validate="'required'" name="description"></textarea>
		                    <div class="weui-textarea-counter"><span>{{alreadyInputLength}}</span>/{{allLength}}</div>
		                </div>
						<div class="weui-cell__ft" v-show="errors.has('description')">
							<i class="weui-icon-warn"></i>
						</div>	
		            </div>
		            <div class="weui-cell">
		            	<div class="weui-cell__bd">
							<el-upload
								action="http://localhost:8888/upload/img"
								list-type="picture-card"
								name="uploadimg"
								multiple
								:file-list="fileList"
								:on-preview="handlePictureCardPreview"
								:on-remove="handleRemove"
								:on-success="handleSuccess">
							<i class="el-icon-plus"></i>
							</el-upload>
							<el-dialog v-model="dialogVisible" size="tiny">
								<img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
		            	</div>						
		            </div>
		            <div class="weui-cell ">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" v-on:click="selectPosition" placeholder="请输入所在位置" v-model="position"   name="position"/>	
		                    <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>	                    
		                </div>
						<!--
						<div class="weui-cell__ft" v-show="errors.has('position')">
							<i class="weui-icon-warn"></i>
						</div>	-->					
		            </div>
		            <div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text"  placeholder="请输入详细地址" v-model="address"/>
		                </div>
		            </div>

					<div class="weui-cell weui-cell_select weui-cell_select-before">
						<div class="weui-cell__hd">
							<select class="weui-select" name="contactway" v-model="contactWay"> 
								<option value="1">手机</option>
								<option value="2">QQ</option>
								<option value="3">微信</option>
							</select>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入联系方式" v-model="contactInfo"   v-validate="'required'"  name="contactInfo" />
						</div>
						<div class="weui-cell__ft" v-show="errors.has('contactInfo')">
							<i class="weui-icon-warn"></i>
						</div>							
					</div>

		        </div>

		        <div class="weui-btn-area">
		            <a class="weui-btn weui-btn_primary" href="javascript:" @click="submitForm"  >确定</a>
		        </div>
		    </div>
		 
		</div>
	</div>
</template>

<script>
import vueArea from 'vue-area'
import uuid from 'uuid'
import weui from 'weui.js'
import $ from 'jquery'
import {updateSecondHand,querySecondHandDetail} from '@/service/secondHand'
import {findImageByItemId,addImage,deleteImage} from '@/service/imageStore'
export default {
	data () {
	    return {
		    result: null,
		    show: false,
		    area:'',
		    city:'',
		    province:'',
		    allLength:1000,
		    description:'',
		    title:'',
		    address:'',
		    contactWay:1,
		    contactInfo:'',
			secondHandId:'', 
			dialogImageUrl: '',
        	dialogVisible: false,
			fileList: []
	    }
	  },
	mounted(){
	    this.initData();
	},
	computed:{
		position: function(){
			if('' == this.province || '' == this.city || '' == this.area){
				return '';
			}
			return this.province+"/"+this.city+"/"+this.area;
		},
		alreadyInputLength:function(){
			return this.description.length;
		}
	},
	components: {
		vueArea
	},
	methods: {
	    areaResult: function(show, result){
	    	if(null == result){
	    		return;
	    	}

	        this.show = show;
	        this.result = result;
	        this.area = result.area.name;
	        this.city = result.city.name;
	        this.province = result.province.name;
			this.position = this.province+"/"+this.city+"/"+this.area;
	    },
	    selectPosition: function(){
	    	this.show = true;
	    },
	    handleRemove(file, fileList) {
			console.log(file);
			console.log(fileList);
			deleteImage({"itemId":this.secondHandId,'imageName':file.name});
		},
	    handleSuccess(file, fileList) {
			console.log(file);
			console.log(fileList);
			for(let index in file){
				addImage({"itemId":this.secondHandId,'imageName':file[index]});
			}

		},		
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		submitForm() {
			this.$validator.validateAll().then(() => {
					let secondHand = {};
					secondHand.id=this.secondHandId;
					secondHand.title = this.title;
					secondHand.content = this.description;
					secondHand.province = this.province;
					secondHand.city = this.city;
					secondHand.area = this.area;
					secondHand.address = this.address;
					secondHand.contactWay = this.contactWay;
					secondHand.contactInfo = this.contactInfo;
					addSecondHand(secondHand);
					weui.alert('消息发布成功!');
					this.$router.push('/secondhand/list');
				}).catch(() => {
					weui.alert('消息发布失败，请联系客服!');
				});
		},
	    async initData(){
			this.secondHandId =  this.$route.query.id;
			if(null == this.secondHandId){
				return ;
			}
			let secondHand = await querySecondHandDetail(this.secondHandId);
			this.title = secondHand.title ;
			this.description =	secondHand.content ;
			this.province =	secondHand.province  ;
			this.city =	secondHand.city  ;
			this.area =	secondHand.area  ;
			this.address = secondHand.address  ;
			this.contactWay =	secondHand.contactWay  ;
			this.contactInfo =	secondHand.contactInfo  ;
			let imagelst = await  findImageByItemId(this.secondHandId );
			for(let index in imagelst){
				let temp = {};
				temp.name = imagelst[index].imageName;
				temp.url = 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100';
				this.fileList.push(temp);
			}


		},		
	},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
	.el-upload--picture-card {
	    background-color: #fbfdff;
	    border: 1px dashed #c0ccda;
	    border-radius: 6px;
	    box-sizing: border-box;
	    width: 60px;
	    height: 60px;
	    cursor: pointer;
	    line-height: 61px;
	    vertical-align: top;
	}
	.el-upload-list--picture-card .el-upload-list__item {
	    overflow: hidden;
	    background-color: #fff;
	    border: 1px solid #c0ccda;
	    border-radius: 6px;
	    box-sizing: border-box;
	    width: 59px;
	    height: 59px;
	    margin: 0 8px 8px 0;
	    display: inline-block;
	}
</style>

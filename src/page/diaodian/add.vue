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
						<imgupload  v-bind:itemId="secondHandId"></imgupload>
		            	</div>						
		            </div>
		            <div class="weui-cell ">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" v-on:click="selectPosition" placeholder="请输入所在位置" v-model="position"  v-validate="'required'" name="position"/>	
		                    <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>	                    
		                </div>
						<div class="weui-cell__ft" v-show="errors.has('position')">
							<i class="weui-icon-warn"></i>
						</div>						
		            </div>
		            <div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text"  placeholder="请输入详细地址" v-model="address"/>
		                </div>
		            </div>

					<div class="weui-cell weui-cell_select weui-cell_select-before">
						<div class="weui-cell__hd">
							<select class="weui-select" name="contactway">
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
import imgupload from '@/components/image/imgupload'
import {addSecondHand} from '@/service/secondHand'
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
	    }
	  },
	mounted(){
		this.secondHandId = uuid.v4();
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
		vueArea,
		imgupload
	},
	methods: {
	    areaResult: function(show, result){
	    	console.log(result);
	    	if(null == result){
	    		return;
	    	}
	        this.show = show;
	        this.result = result;
	        this.area = result.area.name;
	        this.city = result.city.name;
	        this.province = result.province.name;
	    },
	    selectPosition: function(){
	    	this.show = true;
	    },
	    handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		submitForm() {
			this.$validator.validateAll().then(() => {
					alert('From Submitted!');
					let secondHand = {};
					secondHand.id=secondHandId;
					secondHand.title = this.title;
					secondHand.content = this.description;
					secondHand.province = this.province;
					secondHand.city = this.city;
					secondHand.area = this.area;
					secondHand.address = this.address;
					secondHand.contactWay = this.contactWay;
					secondHand.contactInfo = this.contactInfo;
					let result = addSecondHand(secondHand);
					console.log(result);
				}).catch(() => {
					alert('Correct them errors!');
				});
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

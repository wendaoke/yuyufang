<template>
      <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">  
              <el-form ref="commentForm" :inline="false" :model="commentForm"  :rules="rules" label-width="80px" label-position="top" class="comment" >
                <el-form-item label="评论一下"  prop="comment">
                  <el-input type="textarea" v-model="commentForm.comment"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('commentForm')">发 表</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="weui-panel__bd" v-if="commentlst.length > 0">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-bind:id=" item.id " v-for="item in commentlst">
                    <div class="weui-media-box__hd">
                       <img v-bind:src=" item.commentator_headimg " class="weui-media-box__thumb headerimg"></img>
                    </div>
                    <div class="weui-media-box__bd">
                        <ul class="weui-media-box__info">
                            <li class="weui-media-box__info__meta">{{ item.commentator_name }}</li>
                            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{ item.update_time }}</li>
                        </ul>
                        <p class="weui-media-box__desc">{{ item.content }}</p>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft" v-if="commentlst.length > 0">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                layout="total,  prev, pager, next"
                :total="totalRow">
              </el-pagination>   
            </div>
        </div>
</template>

<script>
import {queryCommentList,addComment} from '@/service/getData'
    export default {
    	data(){
            return{
              commentlst:[],
              currentPage: 1, 
              totalRow:0,
              pageSize:15,
              commentForm:{
                comment:''
              },
              rules: {
                comment: [
                  { required: true, message: '亲，说点什么吧！', trigger: 'blur' }
                ]
              }
            }
        },
      mounted(){
        this.queryCommentList();
      },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        this.queryCommentList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.queryCommentList();
      },
      async queryCommentList(){ 
          let pager = await queryCommentList(this.pageSize,this.currentPage,1,'00ca0898b3e5455b8a8d8c8802a0832e');
          this.commentlst = pager.list;
          this.currentPage = pager.curPage;
          this.totalRow = pager.totalRow;
          this.pageSize = pager.pageSize;          
       },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {       
            addComment('00ca0898b3e5455b8a8d8c8802a0832e','111',1,this.commentForm.comment);
            this.commentForm.comment = '';
            this.queryCommentList();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }        
    }
</script>

<style >
.el-select .el-input {
  width: 160px;
}
.comment button{
  float:right;
  margin-left:5px
}
.headerimg {
    border-radius: 50%;
    display: inline-block;
    height: 60px;
    vertical-align: bottom;
    width: 60px;
}
.weui-media-box__bd ul{
    margin-top: 0px;

} 
</style>

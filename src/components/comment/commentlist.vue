<template>
      <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">
              <el-input placeholder="请输入内容" v-model="comment">
                <el-button  slot="append" type="primary" @click="submitForm()">评论</el-button>
              </el-input>
            </div>
            <div class="weui-panel__bd" v-if="commentlst.length > 0">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg youxian-padding" v-bind:id=" item.id " v-for="item in commentlst">
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
import weui from 'weui.js'
import {queryCommentList,addComment} from '@/service/getData'
    export default {
    	data(){
            return{
              comment: '',
              commentlst:[],
              currentPage: 1,
              totalRow:0,
              pageSize:15,
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
        submitForm() {
            if('' != this.comment.trim()){
              addComment('00ca0898b3e5455b8a8d8c8802a0832e','111',1,this.comment);
              this.comment = '';
              this.queryCommentList();
              weui.toast('操作成功', {
                  duration: 3000,
                  className: "bears"
              });
            } else {
              weui.topTips('请写点东西啦！！！', {
                  duration: 3000,
                  className: "custom-classname",
                  callback: function () {
                  }
              });
              return false;
            }
        }
      }
    }
</script>

<style scoped>
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
.weui-media-box_appmsg .weui-media-box__hd {
    margin-right: .8em;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.youxian-padding{
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>

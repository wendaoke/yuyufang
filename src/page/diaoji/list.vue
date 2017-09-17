<template>
  <div class="weui-panel weui-panel_access" >
      <searchbar v-on:message="search" :placeholdertxt="placeholdertxt|filterquery"></searchbar>
      <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_switch">
              <div class="weui-cell__bd">找到 {{msg}}篇文章</div>
              <!--
              <div class="weui-cell__ft">
                 <router-link to="/diaodian/add"  >
                    <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">
                    我来发布
                    </a>
                  </router-link>
              </div>
              -->
          </div>
      </div>
      <div class="weui-panel__bd" id="diaodian-body">
          <div class="weui-media-box weui-media-box_text" v-bind:id=" item.id " v-for="item in diaojilst">
              <router-link :to="{name:'diaojidetail' , params:{diaoJiId:item.id} }"  >
                <h4 class="weui-media-box__title">{{ item.title }}</h4>
                <p class="weui-media-box__desc">{{ item.content }}</p>
              </router-link>
          </div>
       </div>
      <div class="weui-panel__ft">

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 15, 20, 30]"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="totalRow">
        </el-pagination>
   
      </div>
  </div>
</template>

<script>
import 'src/style/weui.min.css'
import {mapState, mapMutations} from 'vuex'
import searchbar from '@/components/common/searchbar'
import {queryDiaoJi} from '@/service/diaoJi'
import store from '@/store/store'
import * as types from '@/store/types'
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      diaojilst:[],
      currentPage: 1, 
      totalRow:0,
      pageSize:8,
      searchTxt:'', 
      placeholdertxt:''    
    }
  },
  mounted(){
    // 获取列表
    this.queryDiaoJiList();
    },
    components:{
        'searchbar':searchbar,
    },
    filters: {
      filterquery: function (value) {
        if (!value) return '请输入查询内容...';
        value = value.toString();
        return value;  
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.queryDiaoJiList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        this.queryDiaoJiList();
      },
      async queryDiaoJiList(){ 
          let pager = await queryDiaoJi(this.pageSize,this.currentPage,this.searchTxt);
          this.diaojilst = pager.list;
          this.msg = pager.totalRow;
          this.currentPage = pager.curPage;
          this.totalRow = pager.totalRow;
          this.pageSize = pager.pageSize;          
       },
      search: function (text) {
        this.searchTxt = text;
        this.placeholdertxt  = text;
        store.commit(types.DIAOJI_QUERY_TEXT, this.searchTxt);  
        console.log('监听到子组件变化:'+this.searchTxt);
        this.queryDiaoJiList();
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.weui-label {
    width: 70px;
 }
.weui-cells {
    margin-top: 0px;
    background-color: #fff;
    line-height: 1.41176471;
    font-size: 13px;
    overflow: hidden;
    position: relative;
    color: #999; 
}
</style>

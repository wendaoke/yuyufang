<template>
  <div class="weui-panel weui-panel_access" >
      <searchbar v-on:message="search" :placeholdertxt="placeholdertxt|filterquery"></searchbar>
      <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_switch">
              <div class="weui-cell__bd">找到 {{msg}}个相关钓点</div>
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
          <div class="weui-media-box weui-media-box_text" v-bind:id=" item.id " v-for="item in diaodianlst">
              <router-link :to="{name:'diaodiandetail' , params:{diaodianid:item.id} }"  >
                <h4 class="weui-media-box__title">{{ item.name }}</h4>
                <p class="weui-media-box__desc">{{ item.fish_desc }}</p>
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
import {queryDiaoDian} from '@/service/getData'
import store from '@/store/store'
import * as types from '@/store/types'
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      diaodianlst:[],
      currentPage: 1, 
      totalRow:0,
      pageSize:8,
      searchTxt:'',
      placeholdertxt:'',  
    }
  },
  mounted(){
 		this.initData();   
    // 获取列表
    this.queryDiaoDianList();
    },
    components:{
        'searchbar':searchbar,
    },
    filters: {
      filterquery: function (value) {
        if (!value) return '请输入查询内容，如区名、地点...';
        value = value.toString();
        return value;  
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.queryDiaoDianList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        this.queryDiaoDianList();
      },
      async queryDiaoDianList(){ 
          console.log(store.state.diaodianquerytxt);
          let pager = await queryDiaoDian(this.pageSize,this.currentPage,store.state.diaodianquerytxt);
          this.diaodianlst = pager.list;
          this.msg = pager.totalRow;
          this.currentPage = pager.curPage;
          this.totalRow = pager.totalRow;
          this.pageSize = pager.pageSize;          
       },
      async initData(){
          this.searchTxt=store.state.diaodianquerytxt;
          if('' != this.searchTxt){
            this.placeholdertxt = this.searchTxt;
          }
      },
      search: function (text) {
        this.searchTxt = text;
        this.placeholdertxt  = text;
        store.commit(types.DIAODIAN_QUERY_TEXT, this.searchTxt);  
        console.log('监听到子组件变化:'+this.searchTxt);
        this.queryDiaoDianList();
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

<template>
  <div class="weui-panel weui-panel_access" >
      <searchbar v-on:message="search"></searchbar>
      <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_switch">
              <div class="weui-cell__bd">小编共找到 {{msg}}篇钓获分享</div>
              <!--
              <div class="weui-cell__ft">
                 <router-link to="/DiaoHuo/add"  >
                    <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">
                    我来发布
                    </a>
                  </router-link>
              </div>
              -->
          </div>
      </div>
      <div class="weui-panel__bd" id="DiaoHuo-body">
          <div class="weui-media-box weui-media-box_text" v-bind:id=" item.id " v-for="item in diaoHuolst">
              <router-link :to="{path:'/diaohuo/detail' , query:{id:item.id} }"  >
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
import {mapState, mapMutations} from 'vuex'
import searchbar from '@/components/common/searchbar'
import {queryDiaoHuo} from '@/service/diaoHuo'
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      diaoHuolst:[],
      currentPage: 1, 
      totalRow:0,
      pageSize:8,
      searchTxt:'',   
    }
  },
  mounted(){
    // 获取列表
    this.queryDiaoHuoList();
    },
    components:{
        'searchbar':searchbar,
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.queryDiaoHuoList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        this.queryDiaoHuoList();
      },
      async queryDiaoHuoList(){ 
          let pager = await queryDiaoHuo(this.pageSize,this.currentPage,this.searchTxt);
          this.diaoHuolst = pager.list;
          this.msg = pager.totalRow;
          this.currentPage = pager.curPage;
          this.totalRow = pager.totalRow;
          this.pageSize = pager.pageSize;          
       },
      search: function (text) {
        this.searchTxt = text;
        console.log('监听到子组件变化:'+this.searchTxt);
        this.queryDiaoHuoList();
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

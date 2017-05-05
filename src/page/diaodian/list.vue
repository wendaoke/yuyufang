<template>
  <div class="weui-panel weui-panel_access" >
      <searchbar v-on:message="search"></searchbar>
      <div class="weui-panel__hd" id="diaodian-title">小编共找到 {{msg}}条记录</div>
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
          layout="total, sizes, prev, pager, next, jumper"
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
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      diaodianlst:[],
      currentPage: 1, 
      totalRow:0,
      pageSize:15,
      searchTxt:'',   
    }
  },
  mounted(){
    // 获取列表
    this.queryDiaoDianList();
    },
    components:{
        'searchbar':searchbar,
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
          let pager = await queryDiaoDian(this.pageSize,this.currentPage,this.searchTxt);
          this.diaodianlst = pager.list;
          this.msg = pager.totalRow;
          this.currentPage = pager.curPage;
          this.totalRow = pager.totalRow;
          this.pageSize = pager.pageSize;          
       },
      search: function (text) {
        this.searchTxt = text;
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

</style>

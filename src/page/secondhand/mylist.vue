<template>
  <div class="weui-panel weui-panel_access" >
      <searchbar v-on:message="search"></searchbar>
      <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_switch">
              <div class="weui-cell__bd">共找到 {{msg}}条记录</div>
              <div class="weui-cell__ft">
                 <router-link to="/secondhand/add"  >
                    <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">
                    我来发布
                    </a>
                  </router-link>
              </div>
          </div>
      </div>
      <div class="weui-panel__bd" id="secondhand-body">
          <div class="weui-media-box weui-media-box_text" v-bind:id=" item.id " :key="item.id" v-for="item in itemlst">
              <router-link :to="{name:'secondhanddetail' , query:{id:item.id} }"  >
                <h4 class="weui-media-box__title">{{ item.title }}</h4>
                <p class="weui-media-box__desc">{{ item.content }}</p>
              </router-link>
                <ul class="weui-media-box__info">
                          <li class="weui-media-box__info__meta">{{ item.province }}-{{ item.city }}-{{ item.area }}</li>
                          <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{ item.upateTime }}</li>
                </ul>
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
import {queryMySecondHand} from '@/service/secondHand'
export default {
  name: 'secondhand',
  data () {
    return {
      msg: '',
      itemlst:[],
      currentPage: 1, 
      totalRow:0,
      pageSize:8,
      searchTxt:'',   
    }
  },
  mounted(){
    // 获取列表
    this.querySecondHandList();
    },
    components:{
        'searchbar':searchbar,
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        this.querySecondHandList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.querySecondHandList();
      },
      async querySecondHandList(){ 
          let pager = await queryMySecondHand(this.pageSize,this.currentPage);
          this.itemlst = pager.list;
          this.msg = pager.totalRow;
          this.currentPage = pager.curPage;
          this.totalRow = pager.totalRow;
          this.pageSize = pager.pageSize;          
       },
      search: function (text) {
        console.log(text);
        this.searchTxt = text;
        this.querySecondHandList();
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
.weui-media-box__info {
    margin-top: 15px;
    padding-bottom: 5px;
    font-size: 13px;
    color: #CECECE;
    line-height: 1em;
    list-style: none;
    overflow: hidden;
}
.weui-media-box__info__meta {
    float: left;
    padding-right: 1em;
}
</style>

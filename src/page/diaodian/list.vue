<template>
  <div class="weui-panel weui-panel_access" >
      <searchbar></searchbar>
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
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
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
    }
  },
  mounted(){
    // 获取列表
    queryDiaoDian().then(res => {
        this.diaodianlst = res;
        this.msg = res.length;
    })
    },
    components:{
        'searchbar':searchbar,
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

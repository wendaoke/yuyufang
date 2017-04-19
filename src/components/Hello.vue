<template>
  <div class="weui-panel weui-panel_access" >
      <searchbar></searchbar>
      <div class="weui-panel__hd" id="diaodian-title">小编共找到 {{msg}}条记录2</div>
      <div class="weui-panel__bd" id="diaodian-body">
          <div class="weui-media-box weui-media-box_text" v-bind:id=" item.id " v-for="item in diaodianlst">
              <h4 class="weui-media-box__title">{{ item.name }}</h4>
              <p class="weui-media-box__desc">{{ item.fish_desc }}</p>
          </div>
       </div>
      <div class="weui-panel__ft">
          <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
              <div class="weui-cell__bd">查看更多</div>
              <span class="weui-cell__ft"></span>
          </a>    
      </div>
  </div>
</template>

<script>
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
        console.log('11');
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
</style>

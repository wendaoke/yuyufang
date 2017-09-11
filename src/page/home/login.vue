<template>

</template>

<script>
import 'src/style/weui.min.css'
import {mapState, mapMutations} from 'vuex'
import store from '@/store/store'
import * as types from '@/store/types'
import {checkUser} from '@/service/checkUser'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  mounted(){
 		this.initData();   
    },
    components:{
    },
    methods: {
      async initData(){
       let redirect = this.$route.query.redirect;
       if(null == redirect || '/' == redirect || 'undefined' == redirect){
         redirect = '/';
       }
        redirect = decodeURIComponent(redirect || '/');
        let res = await checkUser(redirect);
        if(res.code != ''){
            store.commit(types.LOGIN, res.description);           
            window.open(res.code, "_top");           
        }
      },

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

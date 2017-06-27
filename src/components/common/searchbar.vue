<template>
     
        <el-input placeholder="请输入查询内容"  v-model="queryTxt" >
          <el-button slot="append" icon="search"  @click="onSearch"></el-button>
        </el-input>
     
</template>

<script>

    export default {
    	data(){
            return{
		      queryTxt: '',
            }
        },
        methods: {
          onSearch: function () {
            // if (this.queryTxt.trim()) {
              this.$emit('message', this.queryTxt);
            // }
          }
        }
    }
</script>

<style >
.el-select .el-input {
  width: 160px;
}
</style>

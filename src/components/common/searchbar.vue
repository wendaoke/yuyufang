<template>
     
        <el-input placeholder="请输入查询内容" v-model="input5">
          <el-button slot="append" icon="search"></el-button>
        </el-input>
     
</template>

<script>

    export default {
    	data(){
            return{
		      input5: '',
            }
        },
    }
</script>

<style >
.el-select .el-input {
  width: 160px;
}
</style>

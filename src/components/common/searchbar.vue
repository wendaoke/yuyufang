<template>
     
        <el-input  v-bind:placeholder="placeholdertxt | filterquery"  v-model="queryTxt" >
          <el-select v-model="select" slot="prepend" placeholder="城市" 
            filterable
            remote
            :remote-method="remoteMethod"
            :loading="loading"
            >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button slot="append" icon="search"  @click="onSearch"></el-button>
        </el-input>
     
</template>

<script>
import {findCityByName} from '@/service/position'
    export default {
    	data(){
            return{
              queryTxt: '',
              options: [],
              select: '南京',
              list: [],
              loading: false,
              states: ["Alabama", "Alaska", "Arizona",
              "Arkansas", "California", "Colorado",
              "Connecticut", "Delaware", "Florida",
              "Georgia", "Hawaii", "Idaho", "Illinois",
              "Indiana", "Iowa", "Kansas", "Kentucky",
              "Louisiana", "Maine", "Maryland",
              "Massachusetts", "Michigan", "Minnesota",
              "Mississippi", "Missouri", "Montana",
              "Nebraska", "Nevada", "New Hampshire",
              "New Jersey", "New Mexico", "New York",
              "North Carolina", "North Dakota", "Ohio",
              "Oklahoma", "Oregon", "Pennsylvania",
              "Rhode Island", "South Carolina",
              "South Dakota", "Tennessee", "Texas",
              "Utah", "Vermont", "Virginia",
              "Washington", "West Virginia", "Wisconsin",
              "Wyoming"]
            }
        },
        props: ['placeholdertxt'],
        filters: {
          filterquery: function (value) {
            if (!value) return '请输入查询内容...';
            value = value.toString();
            return value;  
          }
        },
        mounted() {
          this.list = this.states.map(item => {
            return { value: item, label: item };
          });
        },        
        methods: {
          onSearch: function () {
              this.$emit('message', this.queryTxt);
          },
          remoteMethod(query) {
            console.log(query);
            if (query !== '') {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.queryCityList(query);
              }, 200);
            } else {
              this.options = [];
            }
          },
          async queryCityList(query){ 
              let citylst = await findCityByName(query);
              this.options = citylst;
          },
        }
    }
</script>

<style >
.el-select .el-input input {
    cursor: pointer;
    padding-right: 3px; 
}
.el-select .el-input {
  width: 60px;
}

</style>

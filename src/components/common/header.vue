<template>
    
</template>

<script>
import $ from 'n-zepto'
import {checkUser} from '@/service/checkUser'
    export default {
    	data(){
            return{
            }
        },
	    mounted: function () {
			this.initData();	
		},
        methods: {
            async initData(){
                    let res = await checkUser();
					if($.trim(res) != ''){
						router.replace(res)
					}
            }
        }
    }
</script>

<style scoped>

</style>

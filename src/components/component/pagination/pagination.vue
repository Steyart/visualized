<template>
    <div>
        <div class="block">
            <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                layout="total, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    props:{
        total:{
            type : Number,//条数
            default:0,
        },
        currentPage:{
            type : Number,//页数
            default:0,
        },
    },
    data () {
        return {
            
        }
    },
    components:{
        
    },
    created(){
        
    },
    methods:{
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange',val);
        }
    }
}
</script>
<style lang="less" scoped>

</style>
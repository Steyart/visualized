<template>
    <div class="dom-bgc">
        <div class="dom-title">
            <span>模板</span>
        </div>
        <content class="dom-content ">
            <div class="func-box dflex space-between">
                <div class="add-html dflex flex-start color_ec5051" @click="addHtml">
                    <div><i class="el-icon-plus "></i></div>
                    <div class="add-html-btn">添加页面</div>
                </div>
                <div class="search-box dflex flex-start">
                    <div class="search-val"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                    <div class="search-btn" @click="search"><el-button slot="append" icon="el-icon-search"></el-button></div>
                </div>
            </div>
            <div class="table-box">
                <el-table class="name" :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="标题"></el-table-column>
                    <el-table-column prop="date" label="创建时间" ></el-table-column>
                    <el-table-column fixed="right" label="操作" width="300">
                        <template slot-scope="scope">
                            <el-button @click="copyItem(scope.row)" size="small">复制</el-button>
                            <el-button @click="editItem(scope.row)" size="small">编辑</el-button>
                            <el-button @click="removeItem(scope.row)" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="table-box dflex flex-end">
                <pagination :total="total" :currentPage="currentPage" @handleCurrentChange="handleCurrentChange"></pagination>
            </div>
        </content>
    </div>
</template>

<script>
import Vue from "vue";
import "../../../assets/css/style.less"
const pagination = ()=>import("../../component/pagination/pagination.vue");

export default {
    data () {
        return {
            tableData: [],//列表参数
            parameter:{},//请求接口参数
            postUrl:"",//请求接口地址
            total:0,//数据总条数
            currentPage:0,//数据总页数

            input:'',//搜索框内容
        }
    },
    components: {
        pagination,
    },
    created(){
        this.getItem();
    },
    methods: {
        getItem(){
            this.tableData = [{
                id:1,
                date: '2019-10-29 14:56:36',
                name: '渔家小铺1',
            }, {
                id:2,
                date: '2019-10-29 14:56:36',
                name: '渔家小铺2',
            }, {
                id:3,
                date: '2019-10-29 14:56:36',
                name: '渔家小铺3',
            }, {
                id:4,
                date: '2019-10-29 14:56:36',
                name: '渔家小铺4',
            }]
            this.total = 100;
            this.currentPage = 10;
        },
        copyItem(row) {
            this.tableData = [...[row],...this.tableData];
        },
        editItem(row) {
            this.$router.push({
                path:"/item",
                query:{
                    id:row.id,
                    type:'edit'
                }
            })
        },
        removeItem(row) {
            console.log(row)
        },
        addHtml(){
            this.$router.push({
                path:"/item",
                query:{
                    type:'add'
                }
            })
        },
        search(){
            console.log(this.input);
        },
        handleCurrentChange(val){
            console.log(val);
        }
    },
}
</script>
<style lang="less" scoped>
    .func-box{
        margin-bottom: 20px;
        .add-html{
            border: 1px solid #ec5051;
            border-radius: 5px;
            padding: 10px;
            font-size: 14px;
            cursor: pointer;
            i{
                font-weight: bold;
            }
            .add-html-btn{
                padding-left: 5px;
            }
        }
    }
</style>
<style>
    .table-box .has-gutter tr th{
        background-color: #f2f2f2;
    }
    .table-box .el-table__fixed-header-wrapper tr th{
        background-color: #f2f2f2;
    }
</style>
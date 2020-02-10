<template>
    <div class="dom-bgc">
        <div class="dom-title">
            <a href="javascript:;" class="s-back"></a>
            <span>模板-添加页面</span>
        </div>
        <content class="dom-content ">
            <div class="dflex flex-start">
                <div>
                    <div class="content-left content-aside">
                        <div class="content-left-title">组件</div>
                        <div class="content-left-nav">
                            <el-button class="content-left-nav-btn" v-for="(asideItem,asideKey) in aside" :key="asideKey" @click="asideChange(asideItem)">{{asideItem.title}}</el-button>
                        </div>
                    </div>
                    <div class="content-left-bg"></div>
                </div>
                <div class="content-right content-operation">
                    <div class="content-operation-top">
                        <div class="dflex flex-start">
                            <div class="operation-label">页面名称：</div>
                            <el-input  class="" placeholder="请输入页面名称" v-model="htmlTItle"></el-input>
                        </div>
                    </div>
                    <div class="content-operation-container dflex flex-start">
                        <div class="content-operation-container-left" :style="[{'background-color':htmlColor}]">
                            <div class="top-box">
                                <img src="../../../assets/images/top.png" alt="">
                            </div>
                            <div id="sortable">
                                <component v-for="(cItem,cIndex) in componentData" :key="cIndex" v-bind:is="cItem.componentName" class="tab" @changeComponents="changeComponents" :data="cItem.optionData" :index="cIndex" :mid="cItem.id" :model_id="cItem.model_id">
                                </component>
                            </div>
                        </div>
                        <div class="content-operation-container-right">
                            <div class="change-html-color dflex flex-start">
                                <div class="operation-label">页面颜色</div>
                                <div class="color-picker-box">
                                    <el-color-picker v-model="htmlColor" size="mini" class="operation-color-picker"></el-color-picker>
                                </div>
                            </div>
                            <div class="option-container-box">
                                <keep-alive>
                                    <component v-bind:is="optionName" :id="id" :optionData="optionData" class="tab" @optionChange="optionChange"></component>
                                </keep-alive>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </content>
    </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import 'jqueryui';
import "../../../assets/css/style.less"
const navigator = ()=>import("../../component/list/template/navigator-demo.vue");
const pictureAds = ()=>import("../../component/list/template/picture-ads-demo.vue");
const commodity = ()=>import("../../component/list/template/commodity-demo.vue");
const navigatorOption = ()=>import("../../component/list/option/navigator-option-demo.vue");
const pictureAdsOption = ()=>import("../../component/list/option/picture-ads-option-demo.vue");
const commodityOption = ()=>import("../../component/list/option/commodity-option-demo.vue");

export default {
    data () {
        return {
            id:0,//选中模板

            aside:[],//组件列表
            componentData:[],//页面列表
            componentData2:[],//页面列表

            attribute:{//页面属性
                backgroundColor:'',
                optionComponent:[],
            },
            htmlColor:"#f2f2f2",//页面颜色
            htmlTItle:'',//页面标题
            componentOptionName:'',//选中属性模板

            optionData:{},//组件属性参数
        }
    },
    created(){
        this.getAside();
        this.getItemDemo();
    },
    computed: {
        optionName: function (res) {
            return this.componentOptionName;
        }
    },
    mounted(){
        let _this = this;
        $( "#sortable" ).sortable({
            start: function(event, ui){
                _this.componentData2 = _this.$copy(_this.componentData)
                let result = $(this).sortable('toArray');
                for(let key in result){
                    let index = result[key].split("-");
                    index = index[1];
                }
            },
            update: function(event, ui) {
                let result = $(this).sortable('toArray');
                for(let key in result){
                    let index = result[key].split("-");
                    index = index[1];
                    _this.componentData[key] = _this.componentData2[index]
                }
            }
        });
        $( "#sortable" ).disableSelection();
    },
    methods:{
        asideChange(item){
            let data = this.$copy(item);
            data.sort = this.componentData.length + 1;
            data.id = this.componentData.length + 1;
            this.componentData = [...this.componentData,...[data]];
        },
        getAside(){
            this.aside = [{
                model_id:1,
                title:'导航栏',
                componentName:'navigator',
                componentOptionName:'navigator-option',
                optionData:{
                    isShowArrow:0,
                    isFiexd:0,
                    navigatorTitle:'',
                    navigatorPosition:'fixed',
                    navigatorBackground:'#fff',
                    navigatorColor:'#212121',
                    arrowLeftColor:'#333',
                },
            },{
                model_id:2,
                title:'图片广告',
                componentName:'picture-ads',
                componentOptionName:'picture-ads-option'
            },{
                model_id:3,
                title:'商品',
                componentName:'commodity',
                componentOptionName:'commodity-option'
            }];
        },
        getItemDemo(){
            Vue.component('navigator', navigator);
            Vue.component('navigator-option', navigatorOption);
            Vue.component('picture-ads', pictureAds);
            Vue.component('picture-ads-option', pictureAdsOption);
            Vue.component('commodity', commodity);
            Vue.component('commodity-option', commodityOption);
        },
        changeComponents(item){
            this.id = item.id;
            this.componentOptionName = item.name;
            this.optionData = item.data;
        },
        optionChange(item){
            for(let key in this.componentData){
                if(item.id == this.componentData[key].id){
                    this.componentData[key].optionData = item.item;
                }
            }
        },
    }
}
</script>
<style lang="less" scoped>
.content-left-bg{
    width: 140px;
    padding: 20px 30px;
}
.content-left{
    width: 140px;
    padding: 20px 30px;
    height: 100%;
    background-color: #fff;
    .content-left-title{
        margin-bottom: 14px;
        font-size: 14px;
        color: #343434;
    }
    .content-left-nav{
        display: flex;
        flex-wrap: wrap;
        .content-left-nav-btn{
            flex: 1;
            display: block;
            width: 100%;
            margin: 0 auto 10px;
            background-color: #f2f2f2;
        }
        .content-left-nav-btn:hover{
            background-color: #e9f2fa;
            border-color: #62b3ff;
            color:#62b3ff;
        }
    }
}
.content-operation{
    background-color: #fff;
    padding: 12px 33px;
    margin-left: 20px;
    width: 100%;
    .content-operation-top{
        width: 380px;
        .operation-label{
            width: 25%;
        }
    }
    .content-operation-container{
        margin-top: 10px;
        .content-operation-container-left{
            max-width: 375px;
            min-height: 667px;
            border:1px solid #c9c9c9;
            background-color: #f2f2f2;
        }
        .top-box{
            img{
                width: 100%;
                display: block;
            }
        }
        .content-operation-container-right{
            width: 624px;     
            margin-left: 40px;
            background-color: #fff;
            .change-html-color{
                margin-bottom: 10px;
            }
            .option-container-box{
                position: fixed;
            }
        }
    }
}
</style>
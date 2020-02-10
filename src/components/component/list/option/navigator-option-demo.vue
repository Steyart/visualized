<template>
    <div>
        <div class="navigator-option-box">
            <div>导航栏</div>
            <div>
                <el-form ref="form" class="form-box">
                    <div class="dflex flex-start form-row">
                        <div class="operation-label">导航栏名称：</div>
                        <el-input  class="" placeholder="导航栏名称" v-model="navigatorTitle"></el-input>
                    </div>
                    <div class="change-html-color dflex flex-start form-row">
                        <div class="operation-label">文本颜色：</div>
                        <div class="color-picker-box">
                            <el-color-picker v-model="navigatorColor" size="mini" class="operation-color-picker"></el-color-picker>
                        </div>
                    </div>
                    <div class="dflex flex-start form-row">
                        <div class="operation-label">返回按钮：</div>
                        <div class="radio-picker-box">
                            <el-radio v-model="isShowArrow" label="1">是</el-radio>
                            <el-radio v-model="isShowArrow" label="2">否</el-radio>
                        </div>
                    </div>
                    <div class="change-html-color dflex flex-start form-row">
                        <div class="operation-label">按钮颜色：</div>
                        <div class="color-picker-box">
                            <el-color-picker v-model="arrowLeftColor" size="mini" class="operation-color-picker"></el-color-picker>
                        </div>
                    </div>
                    <div class="dflex flex-start form-row">
                        <div class="operation-label">悬浮：</div>
                        <div class="radio-picker-box">
                            <el-radio v-model="isFiexd" label="1">是</el-radio>
                            <el-radio v-model="isFiexd" label="2">否</el-radio>
                        </div>
                    </div>
                    <div class="change-html-color dflex flex-start form-row">
                        <div class="operation-label">背景颜色：</div>
                        <div class="color-picker-box">
                            <el-color-picker v-model="navigatorBackground" size="mini" class="operation-color-picker"></el-color-picker>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import "../../../../assets/css/style.less"
export default {
    props :{
        id:{
            type:Number,
            default:0,
        },
        optionData:{
            type:Object,
            default:undefined,
        }
    },
    data () {
        return {
            isShowArrow:0,
            isFiexd:0,
            navigatorTitle:'',
            navigatorPosition:'fixed',
            navigatorBackground:'#fff',
            navigatorColor:'#212121',
            arrowLeftColor:'#333',
        }
    },
    watch: {
        optionData(res){
            this.isShowArrow = res.isShowArrow;
            this.isFiexd = res.isFiexd;
            this.navigatorTitle = res.navigatorTitle;
            this.navigatorPosition = res.navigatorPosition;
            this.navigatorBackground = res.navigatorBackground;
            this.navigatorColor = res.navigatorColor;
            this.arrowLeftColor = res.arrowLeftColor;
        },
        isShowArrow(res){
            let data = {
                id:this.id,
                item:this.getData('isShowArrow',res),
            };
            this.$emit('optionChange',data)
        },
        isFiexd(res){
            let data = {
                id:this.id,
                item:this.getData('isFiexd',res),
            };
            this.$emit('optionChange',data)
        },
        navigatorTitle(res){
            let data = {
                id:this.id,
                item:this.getData('navigatorTitle',res),
            };
            this.$emit('optionChange',data)
        },
        navigatorPosition(res){
            let data = {
                id:this.id,
                item:this.getData('navigatorPosition',res),
            };
            this.$emit('optionChange',data)
        },
        navigatorBackground(res){
            let data = {
                id:this.id,
                item:this.getData('navigatorBackground',res),
            };
            this.$emit('optionChange',data)
        },
        navigatorColor(res){
            let data = {
                id:this.id,
                item:this.getData('navigatorColor',res),
            };
            this.$emit('optionChange',data)
        },
        arrowLeftColor(res){
            let data = {
                id:this.id,
                item:this.getData('arrowLeftColor',res),
            };
            this.$emit('optionChange',data)
        },
    },
    methods:{
        getData(type,res){
            let data = {
                isShowArrow:this.isShowArrow,
                isFiexd:this.isFiexd,
                navigatorTitle:this.navigatorTitle,
                navigatorPosition:this.navigatorPosition,
                navigatorBackground:this.navigatorBackground,
                navigatorColor:this.navigatorColor,
                arrowLeftColor:this.arrowLeftColor,
            }
            if(type == "arrowLeftColor"){
                data.arrowLeftColor = res
            }else if(type == "navigatorColor"){
                data.navigatorColor = res;
            }else if(type == "navigatorBackground"){
                data.navigatorBackground = res;
            }else if(type == "navigatorPosition"){
                data.navigatorPosition = res;
            }else if(type == "navigatorTitle"){
                data.navigatorTitle = res;
            }else if(type == "navigatorTitle"){
                data.navigatorTitle = res;
            }else if(type == "isFiexd"){
                data.isFiexd = res;
            }else if(type == "isShowArrow"){
                data.isShowArrow = res;
            }

            return data;
        },
    },
}
</script>
<style lang="less" scoped>
.form-box{
    .operation-label{
        width: 25%;
        min-width: 90px;
        text-align: right;
    }
    .color-picker-box{
        margin-left: 0px;
    }
    .form-row{
        margin-bottom: 10px;
    }
}
</style>
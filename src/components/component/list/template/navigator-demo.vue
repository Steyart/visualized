<template>
    <div :id="`demo-${index}`">
        <div class="demo-box" @click="change">
            <div class="navigator-box" :style="[{'background-color': navigatorBackground}]">
                <div class="arrow-left" v-if="isShowArrow == 1"><svg t="1574737914831" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2658" ><path d="M589.088 790.624L310.464 512l278.624-278.624 45.248 45.248L400.96 512l233.376 233.376z" :fill="arrowLeftColor" p-id="2659"></path></svg></div>
                <div class="navigator-title" :style="{'color': navigatorColor}">{{navigatorTitle}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import "../../../../assets/css/style.less"
export default {
    props :{
        data:{
			type: Object,
			default: undefined
        },
        index:{
            type:Number,
            default:0,
        },
        mid:{
            type:Number,
            default:0,
        },
        model_id:{
            type:Number,
            default:0,
        }
    },
    data () {
        return {
            componentOptionName:"navigator-option",

            isShowArrow:1,
            navigatorTitle:'导航栏名称',
            navigatorPosition:'fixed',
            navigatorBackground:'#fff',
            navigatorColor:'#212121',
            arrowLeftColor:'#333',
        }
    },
    watch:{
        data(res){
            if(this.data){
                this.isShowArrow = res.isShowArrow || 1;
                this.navigatorTitle = res.navigatorTitle || "导航栏名称";
                this.navigatorPosition = res.navigatorPosition;
                this.navigatorBackground = res.navigatorBackground;
                this.navigatorColor = res.navigatorColor;
                this.arrowLeftColor = res.arrowLeftColor;
            }
        }
    },
    created(){
        
    },
    methods:{
        change(){
            let data = {
                id : this.id,
                name:this.componentOptionName,
                data:this.data,
                model_id:this.model_id,
            }
            this.$emit('changeComponents',data)
        },
    },
}
</script>
<style lang="less" scoped id="navigator-dom-style">
.navigator-box{
    align-items: center;
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    position: relative;
    .arrow-left{
        position: absolute;
        left: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        svg{
            height: 28px;
            display: block;
        }
    }
    .navigator-title{
        margin: auto;
    }
}
</style>
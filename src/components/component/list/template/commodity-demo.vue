<template>
    <div :id="`demo-${index}`">
        <div @click="change">商品栏</div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    props:{
        index:{
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            componentOptionName:"commodity-option",
        }
    },
    created(){
        
    },
    methods:{
        change(){
            console.log(1);
            this.$emit('changeComponents',this.componentOptionName)
        },
    },
}
</script>
<style lang="less" scoped>

</style>
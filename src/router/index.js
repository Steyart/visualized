import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/list', name:'list', component: resolve => require(['@/components/pages/list/list.vue'], resolve)},//可视化列表
    {path:'/item', name:'item', component: resolve => require(['@/components/pages/list/item.vue'], resolve)},//可视化详情
    {path:'/demo', name:'demo', component: resolve => require(['@/components/pages/list/demo.vue'], resolve)},//可视化详情
  ]
})

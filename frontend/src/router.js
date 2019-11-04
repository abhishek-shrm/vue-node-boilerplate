import Vue from 'vue'
import vueRouter from 'vue-router'
import store from './store'

Vue.use(vueRouter);

const routes=[
  {
    path:'/',
    component:()=>import('./views/home.vue'),
    children:[
      {
        path:'',
        name:"Home",
        component:()=>import('./components/homeComponent.vue')
      }
    ]
  }
];

export default new vueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes:routes
});
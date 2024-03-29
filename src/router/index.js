import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import AddProduct  from'../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-product',
    name: 'add',
    component: AddProduct
  },
  {
    path: '/edit-product/:id',
    name: 'edit',
    component: EditProduct
  },

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router

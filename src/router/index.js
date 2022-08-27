import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ItemView from '../views/ItemView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },{
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

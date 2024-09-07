
import Home from '@/pages/Home'
import Catalog from '@/pages/Catalog'
import Product from '@/pages/Product'
import Basket from '@/pages/Basket'
import Love from '@/pages/Love'
import Admin from '@/pages/Admin'

import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component:Home},
    { path: '/catalog', component:Catalog},
    { path: '/product/:id', component:Product},
    { path: '/basket', component:Basket},
    { path: '/love', component:Love},
    { path: '/admin', component:Admin},
  
  ]

const router = createRouter({

    history:createWebHashHistory(),
    routes, 
  })


  export default router
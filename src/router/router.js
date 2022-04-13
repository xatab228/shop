import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main.vue'
import Product from '@/pages/Product.vue'
import ProductIdPage from '@/pages/ProductIdPage.vue'
import ProductWithStore from '@/pages/ProductWithStore.vue'
import ProductWithCompositionAPI from '@/pages/ProductWithCompositionAPI.vue'
import Test from '@/pages/Test.vue'

const routes = [
    {
        path: '/',
        component: Main

    },
    {
        path: '/product',
        component: Product

    },
    {
        path: '/product/:id',
        component: ProductIdPage

    },
    {
        path: '/productWithStore',
        component: ProductWithStore

    },
    {
        path: '/pwca',
        component: ProductWithCompositionAPI

    },
    {
        path: '/test',
        component: Test

    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
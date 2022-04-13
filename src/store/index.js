import { createStore } from "vuex"
import { likesProduct } from "@/store/likesProduct"
import { productsModel } from "@/store/productsModel"

export default createStore({
    modules: {
        likes: likesProduct,
        prodModl: productsModel

    }
})
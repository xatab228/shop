import axios from "axios";

export const productsModel = {
    state: () => ({
      products: [],
      servInfo: {
        url: "https://jsonplaceholder.typicode.com/posts",
        page: 1,
        limit: 10,
        pageTotal: 0,
      },
      options: [
        { value: "title", name: "Name" },
        { value: "body", name: "Content" },
      ],
      selectOption: "",
      searchProduct: "",

    }),

    getters: {
        
        sortedProducts(state) {
            return [...state.products].sort((p1, p2) =>
              p1[state.selectOption]?.localeCompare(p2[state.selectOption])
            );
          },
      
          sortedAndSearchedProduct(state,getters) {
            return getters.sortedProducts.filter((product) =>
              product.title.toLowerCase().includes(state.searchProduct.toLowerCase())
            );
          },

    },

    mutations : {
        // Изменение состояния в state

        set_products(state,products){
            state.products = products
        },
        set_page(state,page){
            state.servInfo.page = page
        },
        set_pageTotal(state,pageTotal){
            state.servInfo.pageTotal = pageTotal
        },
        set_selectOption(state,selectOption){
            state.selectOption = selectOption
        },
        set_searchProduct(state,searchProduct){
            state.searchProduct = searchProduct
        },
    },

    actions : {
      async fetchData({state,commit}) {
        try {
          const response = await axios.get(state.servInfo.url, {
            params: {
              _page: state.servInfo.page,
              _limit: state.servInfo.limit,
            },
          });
          commit('set_pageTotal',Math.ceil(
            response.headers["x-total-count"] / state.servInfo.limit
          ))
          commit('set_products',response.data)
        } catch (err) {
          console.log(err);
        }
      },
      async loadMoreData({state,commit}) {
        try {
          commit('set_page',state.servInfo.page + 1)
          const response = await axios.get(state.servInfo.url, {
            params: {
              _page: state.servInfo.page,
              _limit: state.servInfo.limit,
            },
          });
          commit('set_pageTotal',Math.ceil(
            response.headers["x-total-count"] / state.servInfo.limit
          ))
          commit('set_products',[...state.products, ...response.data])
        } catch (err) {
          console.log(err);
        }
      },

    },
    namespaced: true,
}
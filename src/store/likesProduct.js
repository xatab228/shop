export const likesProduct = {
    state: () => ({
        likes: 1
    }),
    getters: {
        //$store.getters['nameModul/func']///
        countX2(state){
            return state.likes * 2
        }
    },
    mutations: {
        //$store.commit('nameModul/func')///
        inrementCount(state){
            state.likes +=1
        },
        dicrementCount(state){
            state.likes -=1
        },
    },
    namespaced: true
}
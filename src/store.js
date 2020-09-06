import Vue from 'vue'
import Vuex from'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:10,
        message:"hello"
    },
    getters:{
        getCount:function(state){
            return state.count
        },
        getMessage:function(state){
            return state.message
        }
    }
})
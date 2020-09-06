import Vue from 'vue'
import Vuex from'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:10,
        message:"hello"
    },
    getters:{
        getCount:function(){
            return this.state.count
        },
        getMessage:function(){
            return this.state.message
        }
    }
})
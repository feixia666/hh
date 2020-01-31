import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try{
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
}catch (e) {console.log(e)}

export default new Vuex.Store({
  state: {
    citiesAlphabet: '',
    city: defaultCity
  },
  mutations: {
    changeCity(state, name){
      state.city = name
      try{
        localStorage.city = name
      }catch (e) {console.log(e)}
    }
  },
  actions: {
  },
  modules: {
  }
})

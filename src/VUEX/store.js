import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import {firebaseMutations, firebaseAction} from 'vuexfire'

Vue.use(Vuex)

var config = {
  apiKey: 'AIzaSyB9K-i0ZiFB7HISJtGFVadC9pdO9nc5qX8',
  authDomain: 'todo-list-e337a.firebaseapp.com',
  databaseURL: 'https://todo-list-e337a.firebaseio.com',
  projectId: 'todo-list-e337a',
  storageBucket: 'todo-list-e337a.appspot.com',
  messagingSenderId: '78015838709'
}
firebase.initializeApp(config)
let db = firebase.database()

let Products = db.ref('products')

const store = new Vuex.Store({
  strict: true,
  state: {
    products: [],
    status: true
  },
  getters: {
    products: state => state.products,
    status: state => state.status
  },
  mutations: {
    ...firebaseMutations,
    SETSTATUS (state, status) {
      state.status = status
    }
  },
  actions: {
    setProductsRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      bindFirebaseRef('products', Products)
    }),
    setStatus ({commit}, status) {
      commit('SETSTATUS', status)
    }
  }
})

export default store

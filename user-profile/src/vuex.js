// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    submittedData: [] // The array to store form data
  },
  mutations: {
    addSubmittedData(state, data) {
      state.submittedData.push(data);
    }
  }
});

export default store;
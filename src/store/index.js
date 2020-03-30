import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const COMMAND_INPUT = 'COMMAND_INPUT';
const GET_OUTPUT = 'GET_OUTPUT';
const SET_OUTPUT = 'SET_OUTPUT';

export default new Vuex.Store({
  state: {
    output: [],
  },
  getters: {
    [GET_OUTPUT](state) {
      return state.output;
    },
  },
  mutations: {
    [SET_OUTPUT](state, output) {
      state.output = output;
    },
  },
  actions: {
    [COMMAND_INPUT]({ commit }, input) {
      console.log(input);
      commit(SET_OUTPUT, []);
    },
  },
});

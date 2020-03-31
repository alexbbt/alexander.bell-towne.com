import Vue from 'vue';
import Vuex from 'vuex';

import Shell from '../modules/shell';

Vue.use(Vuex);

const shell = new Shell();

export const SHELL_KEYUP = 'SHELL_KEYUP';

export const GET_OUTPUT = 'GET_OUTPUT';
export const SET_OUTPUT = 'SET_OUTPUT';

export const GET_INPUT = 'GET_INPUT';
export const SET_INPUT = 'SET_INPUT';

export default new Vuex.Store({
  state: {
    output: [],
    input: '',
  },
  getters: {
    [GET_OUTPUT](state) {
      return state.output;
    },
    [GET_INPUT](state) {
      return state.input;
    },
  },
  mutations: {
    [SET_OUTPUT](state, output) {
      state.output = output;
    },
    [SET_INPUT](state, input) {
      state.input = input;
    },
  },
  actions: {
    [SET_INPUT]({ commit }, input) {
      commit(SET_INPUT, input);
    },
    [SHELL_KEYUP]({ commit, state }, key) {
      const { output, input, route } = shell.keyup(key, state.input);
      if (output != null) {
        commit(SET_OUTPUT, output);
      }
      if (input != null) {
        commit(SET_INPUT, input);
      }
      return route;
    },
  },
});

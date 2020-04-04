import Vue from 'vue';
import Vuex from 'vuex';

import Shell from '../modules/shell';
import {
  GET_OUTPUT,
  GET_INPUT,
  SET_OUTPUT,
  SET_INPUT,
  SHELL_KEYUP,
} from './constants';

Vue.use(Vuex);

const shell = new Shell();

const store = new Vuex.Store({
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
      console.log(output);
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

// shell.Stdout.read((line: string) => {
//   let output: string[] = store.getters[GET_OUTPUT]();

//   output = [line, ...output];

//   store.commit(SET_OUTPUT, output);
// });

export default store;

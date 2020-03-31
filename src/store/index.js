import Vue from 'vue';
import Vuex from 'vuex';

import Shell from '../modules/shell';

Vue.use(Vuex);

const shell = new Shell();

export const COMMAND_INPUT = 'COMMAND_INPUT';
export const COMMAND_PREVIOUS = 'COMMAND_PREVIOUS';
export const COMMAND_NEXT = 'COMMAND_NEXT';

export const GET_OUTPUT = 'GET_OUTPUT';
export const SET_OUTPUT = 'SET_OUTPUT';

export const GET_COMMAND = 'GET_COMMAND';
export const SET_COMMAND = 'SET_COMMAND';

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
      const output = shell.run(...input.split(' '));

      commit(SET_OUTPUT, output);
    },
    [COMMAND_PREVIOUS]() {
      return shell.previous();
    },
    [COMMAND_NEXT]() {
      return shell.next();
    },
  },
});

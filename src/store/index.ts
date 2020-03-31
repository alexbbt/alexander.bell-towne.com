import Vue from 'vue';
import Vuex from 'vuex';

import Shell from '../modules/shell';

Vue.use(Vuex);

const shell = new Shell();

export const COMMAND_INPUT = 'COMMAND_INPUT';

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
    [COMMAND_INPUT]({ commit, state }, key) {
      if (key === 'Enter') {
        commit(SET_OUTPUT, shell.run(state.input));
        commit(SET_INPUT, '');
      } else if (key === 'ArrowUp') {
        const input = shell.previous(state.input);
        console.log('up', input);
        if (input != null) {
          commit(SET_INPUT, input);
        }
      } else if (key === 'ArrowDown') {
        const input = shell.next(state.input);

        if (input != null) {
          commit(SET_INPUT, input);
        }
      }
    },
  },
});

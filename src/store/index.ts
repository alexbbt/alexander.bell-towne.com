import Vue from 'vue';
import Vuex from 'vuex';

import { CURSOR_HOME } from '@/modules/shell/constants';
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
      const { input, route } = shell.stdin(key, state.input);

      if (input != null) {
        commit(SET_INPUT, input);
      }
      return route;
    },
  },
});

shell.stdout.read((line: OutputSet) => {
  const output: OutputSet[] = store.getters[GET_OUTPUT];

  if (line.commandLine === CURSOR_HOME) {
    store.commit(SET_OUTPUT, []);
  } else {
    store.commit(SET_OUTPUT, [line, ...output]);
  }
});

export default store;

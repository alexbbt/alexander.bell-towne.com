<template>
  <div class="terminal-logo">
    <div class="logo">
      <input
        ref="input"
        :value="input"
        class="input"
        autocomplete="false"
        spellcheck="false"
        @input="updateInput($event.target.value)"
        @keyup="keyup"
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { COMMAND_INPUT, GET_INPUT, SET_INPUT } from '../store/index';

export default {
  name: 'TerminalInput',
  computed: {
    ...mapGetters({
      input: GET_INPUT,
    }),
  },
  mounted() {
    const { input } = this.$refs;
    input.focus();

    this.listner = (event) => {
      if (event.metaKey || event.ctrlKey) {
        return;
      }

      if (event.target !== input) {
        input.focus();
      }
    };

    window.addEventListener('keydown', this.listner);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.listner);
  },
  methods: {
    ...mapActions({
      sendInput: COMMAND_INPUT,
      updateInput: SET_INPUT,
    }),
    keyup(event) {
      this.sendInput(event.key);
      if (event.key === 'Enter') {
        if (this.$route.name !== 'Terminal') {
          this.$router.push('terminal');
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  border: none;
  font-size: var(--global-font-size);
  line-height: var(--global-line-height);
  margin: 0;
  font-family: var(--font-stack);

  // Hack to hide cursor
  color: transparent;
  text-shadow: 0 0 0 var(--font-color);

  padding-left: 5px;

  &:focus {
    outline: none;
  }
}
</style>

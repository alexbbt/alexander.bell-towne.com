<template>
  <div class="terminal-logo">
    <div class="logo">
      <input
        ref="input"
        v-model="input"
        class="input"
        autocomplete="false"
        spellcheck="false"
        @keyup="keyup"
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { COMMAND_INPUT } from '../store/index';

export default {
  name: 'TerminalInput',
  data() {
    return {
      input: '',
    };
  },
  mounted() {
    const { input } = this.$refs;
    input.focus();

    this.listner = (event) => {
      if (event.metaKey || event.ctrlKey) {
        return;
      }
      // if (event.keyCode < 46 || event.keyCode > 90) {
      //   return;
      // }

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
    }),
    keyup(event) {
      switch (event.keyCode) {
        case 13:
          this.enter();
          break;
        default:
          /* no op */
      }
    },
    enter() {
      this.sendInput(this.input);
      this.input = '';
      if (this.$route.name !== 'Terminal') {
        this.$router.push('terminal');
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

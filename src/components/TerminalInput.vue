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
import { COMMAND_INPUT, COMMAND_PREVIOUS, COMMAND_NEXT } from '../store/index';

export default {
  name: 'TerminalInput',
  data() {
    return {
      input: '',
      currentInput: '',
    };
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
      previous: COMMAND_PREVIOUS,
      next: COMMAND_NEXT,
    }),
    keyup(event) {
      switch (event.key) {
        case 'Enter':
          this.enter();
          break;
        case 'ArrowUp':
          this.arrow(true);
          break;
        case 'ArrowDown':
          this.arrow(false);
          break;
        default:
          this.currentInput = this.input;
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
    async arrow(up = true) {
      const command = await (up ? this.previous() : this.next());
      if (command == null) {
        this.input = this.currentInput;
      } else {
        this.input = command;
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

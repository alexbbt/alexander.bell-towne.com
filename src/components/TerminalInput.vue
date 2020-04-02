<template>
  <div class="hide-on-mobile terminal-logo">
    <div class="logo">
      <input
        ref="input"
        :value="input"
        class="input"
        :class="classes"
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
import { SHELL_KEYUP, GET_INPUT, SET_INPUT } from '../store/index';

export default {
  name: 'TerminalInput',
  computed: {
    ...mapGetters({
      input: GET_INPUT,
    }),
    classes() {
      return {
        'hide-cursor': this.input.length === 0,
      };
    },
  },
  mounted() {
    const { input } = this.$refs;
    input.focus();

    this.listner = (event) => {
      const isOnlyNormalKey = !(event.metaKey || event.ctrlKey);
      const isPaste = (event.metaKey || event.ctrlKey) && (event.key === 'v');
      if (!isOnlyNormalKey && !isPaste) {
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
      shellKeyup: SHELL_KEYUP,
      updateInput: SET_INPUT,
    }),
    async keyup(event) {
      const route = await this.shellKeyup(event.key);

      if (route) {
        if (this.$route.name !== route) {
          this.$router.push({ name: route });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .hide-on-mobile {
    display: none;
  }
}

.logo {
  flex: 1;
}

.input {
  width: 100%;
  border: none;
  font-size: var(--global-font-size);
  line-height: var(--global-line-height);
  margin: 0;
  font-family: var(--font-stack);

  padding-left: 5px;

  &:focus {
    outline: none;
  }

  &.hide-cursor {
    // Hack to hide cursor
    color: transparent;
    text-shadow: 0 0 0 var(--font-color);
  }
}
</style>

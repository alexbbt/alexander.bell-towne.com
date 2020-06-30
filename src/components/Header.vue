<template>
  <div class="terminal-nav">
    <div class="terminal-logo">
      <div class="logo terminal-prompt">
        <router-link
          to="/"
          class="no-style"
        >
          bell-towne.com
        </router-link>
      </div>
    </div>
    <TerminalInput class="terminal-input" />
    <nav class="terminal-menu">
      <ul>
        <li
          v-for="link in links"
          :key="link.name"
        >
          <a
            class="menu-item"
            :href="link.href"
            target="_blank"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import TerminalInput from './TerminalInput.vue';

export default {
  name: 'Header',
  components: {
    TerminalInput,
  },
  data() {
    return {
      links: [
        {
          name: 'Github',
          href: 'https://github.com/alexbbt',
        },
        {
          name: 'NPM',
          href: 'https://www.npmjs.com/~alexbbt',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.terminal-input {
  flex: 1;
  display: flex;
}

.terminal-menu {
  width: auto !important;
}
</style>

<template>
  <div class="terminal-nav">
    <div class="terminal-logo">
      <div class="logo terminal-prompt">
        <router-link
          to="/"
          class="no-style"
        >
          www.bell-towne.com
        </router-link>
      </div>
    </div>
    <div class="terminal-logo">
      <div class="logo">
        <input
          ref="input"
          class="input"
          autocomplete="false"
        >
      </div>
    </div>
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
export default {
  name: 'Header',
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
  mounted() {
    this.$refs.input.focus();
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

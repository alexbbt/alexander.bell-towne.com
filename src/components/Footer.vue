<template>
  <div class="terminal-nav">
    <nav class="terminal-menu">
      <ul class="footer">
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
  name: 'Footer',
  data() {
    return {
      links: [
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/alexbelltowne',
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/alexbbt',
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/alexbbt/',
        },
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/alexbbt/',
        },
        {
          name: 'Email',
          href: 'mailto:alexander@bell-towne.com',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer {
  justify-content: start !important;
}
</style>

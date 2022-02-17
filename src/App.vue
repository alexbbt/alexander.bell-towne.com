<template>
  <div
    id="app"
    class="page terminal"
  >
    <Header />
    <router-view class="page-content" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import myFace from './assets/my-face-social.jpg';

import 'flexboxgrid';
import 'terminal.css';

const TITLE = 'Alexander Bell-Towne';
const DESCRIPTION = 'I work as a Senior Software Engineer at Square, Inc.';
const URL = 'https://alexander.bell-towne.com';
const IMAGE = URL + myFace;

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  head: {
    title: TITLE,
    meta: [
      { name: 'description', content: DESCRIPTION },

      // OpenGraph data (Most widely used)
      { property: 'og:title', content: TITLE },
      { property: 'og:site_name', content: 'alexander.bell-towne.com' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: URL },
      { property: 'og:image', content: IMAGE },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: DESCRIPTION },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: URL },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@alexbbt' },
      { name: 'twitter:image:src', content: IMAGE },

      // Google / Schema.org markup:
      { itemprop: 'name', content: TITLE },
      { itemprop: 'description', content: DESCRIPTION },
      { itemprop: 'image', content: IMAGE },
    ],
    link: [
      { rel: 'canonical', href: URL },
    ],
  },
};
</script>

<style lang="scss">
@media (prefers-color-scheme: dark) {
  :root {
    --global-font-size: 15px;
    --global-line-height: 1.4em;
    --global-space: 10px;
    --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
      serif;
    --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
      serif;
    --background-color: #222225;
    --page-width: 60em;
    --font-color: #e8e9ed;
    --invert-font-color: #222225;
    --secondary-color: #a3abba;
    --tertiary-color: #a3abba;
    --primary-color: #62c4ff;
    --error-color: #ff3c74;
    --progress-bar-background: #3f3f44;
    --progress-bar-fill: #62c4ff;
    --code-bg-color: #3f3f44;
    --input-style: solid;
    --display-h1-decoration: none;
  }
}

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  box-sizing: content-box;
  max-width: 800px;
  padding: 0 25px;
  margin: auto;

}

.page-content {
  flex: 1;
}

.grid {
  display: grid;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-columns: repeat( auto-fit, minmax(calc(var(--page-width) / 12), 1fr) );
}
</style>

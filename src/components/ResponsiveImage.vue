<template>
  <img
    :src="src"
  >
</template>

<script>
export default {
  name: 'ResponsiveImage',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  margin: 0 0 var(--global-line-height);
}
</style>

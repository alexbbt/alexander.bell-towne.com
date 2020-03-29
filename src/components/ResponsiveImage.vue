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
}
</style>

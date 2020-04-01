<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <p
      v-for="(line, index) in output"
      :key="index"
      v-html="line"
    />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_OUTPUT } from '../store';

export default {
  name: 'Terminal',
  computed: {
    ...mapGetters({
      output: GET_OUTPUT,
    }),
  },
};
</script>

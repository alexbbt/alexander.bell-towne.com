<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-for="(set , i) in sets"
      :key="i"
    >
      <p
        v-html="set.commandLine"
      />
      <p
        v-for="(line, j) in set.output"
        :key="j"
        v-html="line"
      />
    </div>
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_OUTPUT } from '../store/constants';

export default {
  name: 'Terminal',
  computed: {
    ...mapGetters({
      sets: GET_OUTPUT,
    }),
  },
};
</script>

<template>
  <div class="home">
    <div class="row">
      <div
        class="col-xs-12 col-sm-4"
      >
        <ResponsiveImage :src="myFace" />
      </div>
      <div
        class="col-xs-12 col-sm-8"
      >
        <h2>Hello World!</h2>
        <p>My name is {{ name }}.</p>
        <p>{{ homeJobLine }}</p>
        <p>{{ homeDegreeLine }}</p>
        <p>If you would like my resume, do as Stephen R. Bourne would do.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { NAME, HOME_JOB_LINE, HOME_DEGREE_LINE } from '@/content/me';
import ResponsiveImage from '../components/ResponsiveImage.vue';
import myFace from '../assets/my-face.jpg';

export default {
  name: 'Home',
  components: {
    ResponsiveImage,
  },
  data() {
    return {
      myFace,
      name: NAME,
      homeJobLine: HOME_JOB_LINE,
      homeDegreeLine: HOME_DEGREE_LINE,
    };
  },
};
</script>

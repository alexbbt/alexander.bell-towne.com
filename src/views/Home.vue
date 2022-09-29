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
        <!-- <h2>Hello World</h2> -->
        <h2>Hello World!</h2>
        <p>My name is Alexander Bell-Towne.</p>
        <p>I work as a Senior Software Engineer at Block, Inc. (Formerly Square).</p>
        <p>I have a B.S. in Informatics from the University of Washington.</p>
        <p>If you would like my resume, do as Stephen R. Bourne would do.</p>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
};
</script>

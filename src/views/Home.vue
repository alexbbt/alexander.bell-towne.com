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
        <h2>My name is Alexander Bell-Towne.</h2>
        <p>I work as a Software Engineer at Square, Inc.</p>
        <p>I have a B.S. in Informatics from the University of Washington.</p>
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

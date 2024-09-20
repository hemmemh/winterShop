<template lang="">
  <div class="Love _app">
    <LayoutVue>
      <MainLoveVue />
    </LayoutVue>
  </div>
</template>
<script>
import LayoutVue from '../router/Layout.vue';
import MainLoveVue from '../components/loveComponents/MainLove.vue';

export default {
  components: {
    LayoutVue,
    MainLoveVue,
  },
};
</script>
<style lang="scss"></style>

<template lang="">
  <div class="LoaderElement">
    <LoaderVue />
  </div>
</template>
<script>
import Loader from './Loader.vue';

Loader;
export default {
  props: {
    className: {
      type: String,
      default: 'origin',
    },
  },
};
</script>
<style lang="scss">
.Loader {
  display: flex;
  align-items: center;
  justify-content: center;

  &.basket {
    flex: 1 1 auto;
  }
}
</style>

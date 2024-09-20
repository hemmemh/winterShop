<template>
  <div class="Home _app">
    <LayoutVue>
      <MainHomeVue />
    </LayoutVue>
  </div>
</template>

<script>
import MainHomeVue from '@/components/homeComponents/MainHome.vue';
import LayoutVue from '@/router/Layout.vue';

export default {
  components: {
    MainHomeVue,
    LayoutVue,
  },
};
</script>

<style lang="scss">
.Home {
  &__action {
  }
  &__brands {
  }
  &__events {
  }
  &__new {
  }
  &__mainSlider {
  }
}
</style>

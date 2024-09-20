<template lang="">
  <nav class="Navbar__container top">
    <div class="Navbar__body body-navbar">
      <ActionsMobileVue />
      <LogoVue />
      <ActionsVue />
    </div>
  </nav>
</template>
<script>
import ActionsVue from './components/Actions.vue';
import ActionsMobileVue from './components/ActionsMobile.vue';
import LogoVue from './components/Logo.vue';

export default {
  components: {
    ActionsMobileVue,
    LogoVue,
    ActionsVue,
  },
};
</script>
<style lang=""></style>

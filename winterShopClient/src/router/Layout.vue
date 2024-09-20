<template lang="">
  <NavbarVue />
  <slot></slot>
  <FooterVue />
</template>
<script>
import FooterVue from '../components/footer/Footer.vue';
import NavbarVue from '../components/navbar/Navbar.vue';

export default {
  components: {
    NavbarVue,
    FooterVue,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style lang=""></style>

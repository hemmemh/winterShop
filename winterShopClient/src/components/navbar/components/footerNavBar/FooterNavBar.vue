<template lang="">
  <nav class="Navbar__footer footer-navbar">
    <div class="Navbar__container">
      <div class="footer-navbar__items">
        <div v-for="el in types" :key="el._id" class="footer-navbar__item">
          <router-link :to="`/catalog?type=${el._id}`">{{
            el.name
          }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    types: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.footer-navbar {
  @media (max-width: $mobile) {
    display: none;
  }
  background: #f9f9f9;
  &__items {
    display: flex;
    gap: 25px;
    padding: 15px 0;
  }

  &__item {
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    transition: all 0.3s ease 0s;
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.3s ease 0s;
        color: #eb5757;
      }
    }
  }
}
</style>

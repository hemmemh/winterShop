<template lang="">
  <div class="nav-productCatalog__item">
    <div class="nav-productCatalog__name">{{ name }}</div>
    <div class="nav-productCatalog__group">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
<style lang=""></style>

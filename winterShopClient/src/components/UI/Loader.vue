<template lang="">
  <div :class="`Loader ${className}`">
    <img src="@/images/Rolling-1s-200px.svg" alt="" />
  </div>
</template>
<script>
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

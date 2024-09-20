<template lang="">
  <div class="action-catalog__item item-actionHome">
    <div class="item-actionHome__image">
      <img :src="imagePath" alt="акция 1" />
    </div>
    <p class="item-actionHome__name">{{ name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    srcImage: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  computed: {
    imagePath() {
      return require(`@/images/home/act/${this.srcImage}`);
    },
  },
};
</script>
<style lang="scss">
.item-actionHome {
  flex: 1 1 auto;
  &__cover {
    padding: 0 0 270/667 * 100% 0;
    display: flex;
    flex-direction: column;
  }
  &__image {
    flex: 1 1 auto;
    padding: 0 0 222/436 * 100% 0;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  &__name {
    text-transform: none;
    color: #fff;
    font-size: em(21);
    font-weight: 500;
    line-height: em(35, 21);

    text-align: left;
    padding: 0;
  }
}
</style>

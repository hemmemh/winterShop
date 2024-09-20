<template lang="">
  <div class="ratings-product__left">
    <FormRatingsVue />
    <BodyRatingsVue />
    <PaginationRatingsVue />
  </div>
</template>
<script>
import { API_URL } from '@/utils/config';
import FormRatingsVue from './FormRatings.vue';
import BodyRatingsVue from './BodyRatings.vue';
import PaginationRatingsVue from './PaginationRatings.vue';

export default {
  components: {
    FormRatingsVue,
    BodyRatingsVue,
    PaginationRatingsVue,
  },
  props: {
    product: {
      type: Object,
    },
  },

  data() {
    return {
      API_URL: API_URL,
      page: 1,
      limit: 2,
    };
  },
};
</script>
<style lang=""></style>

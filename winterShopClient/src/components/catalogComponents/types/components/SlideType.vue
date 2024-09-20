<template lang="">
  <router-link :to="`/catalog?type=${el._id}`" @click="onTypeChange(el)">
    <div
      class="types-catalog__slider slider-typesCatalog"
      :class="{ active: el._id == $route.query.type }"
    >
      <div class="slider-typesCatalog__body">
        <div class="slider-typesCatalog__image">
          <img :src="`${API_URL}/brands/${el.image}`" alt="" />
        </div>
      </div>
      <p class="slider-typesCatalog__name">{{ el.name }}</p>
    </div>
  </router-link>
</template>
<script>
import { mapMutations } from 'vuex';
import { API_URL } from '../../../../utils/config';

export default {
  methods: {
    ...mapMutations({
      setPage: 'product/setPage',
    }),

    onTypeChange(e) {
      const searchParams = new URLSearchParams(this.$route.query);
      searchParams.set('type', e._id);
      searchParams.set('page', 1);
      this.setPage(1);
      this.$router.push({
        path: this.$route.path,
        query: { ...Object.fromEntries(searchParams.entries()) },
      });
    },
  },

  props: {
    el: {
      type: Object,
    },
  },

  setup() {
    return {
      API_URL: API_URL,
    };
  },
};
</script>
<style lang=""></style>

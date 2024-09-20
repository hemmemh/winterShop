<template lang="">
  <main class="Home">
    <MainSliderHomeVue />
    <BrandsHomeVue />
    <ActionVue />
    <NewHomeVue />
    <EventsVue />
  </main>
</template>
<script>
import MainSliderHomeVue from '@/components/homeComponents/components/MainSliderHome.vue';
import BrandsHomeVue from '@/components/homeComponents/components/BrandsHome.vue';
import ActionVue from '@/components/homeComponents/components/action/Action.vue';
import NewHomeVue from '@/components/homeComponents/components/NewHome.vue';
import EventsVue from '@/components/homeComponents/components/events/Events.vue';
export default {
  components: {
    NewHomeVue,
    EventsVue,
    ActionVue,
    MainSliderHomeVue,
    BrandsHomeVue,
  },
};
</script>
<style lang=""></style>

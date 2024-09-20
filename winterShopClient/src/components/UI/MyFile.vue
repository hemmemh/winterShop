<template lang="">
  <div class="MyFile">
    <input ref="inputRef" type="file" @change="setValue" />
    <div class="Myfile__slot" @click="inputRef.click()">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    return {
      inputRef: ref(null),
    };
  },
  methods: {
    setValue(e) {
      this.$emit('fileClick', e.target.files);
    },
  },
};
</script>
<style lang="scss">
.MyFile {
  input {
    display: none;
  }
}
</style>

<template lang="">
  <div :class="`MyInput ${inputClass}`" @click="onFocus">
    <input
      ref="inputRef"
      :placeholder="placeholderOn ? '' : placeholder"
      type="input"
      :value="modelValue"
      @focus="inputFocus"
      @blur="inputBlur"
      @input="setValue"
    />
    <div
      v-if="placeholderOn"
      class="MyInput__placeholder"
      :class="{ active: focus || modelValue }"
    >
      {{ placeholder }}
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  props: {
    inputClass: {
      type: String,
      default: 'origin',
    },
    modelValue: {
      type: String,
    },
    placeholderOn: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      inputRef: ref(null),
    };
  },
  data() {
    return {
      focus: false,
    };
  },
  watch: {},

  methods: {
    setValue(e) {
      this.$emit('update:modelValue', e.target.value);
    },
    onFocus() {
      this.inputRef.focus();
    },
    inputFocus() {
      this.focus = true;
    },
    inputBlur() {
      this.focus = false;
    },
  },
};
</script>
<style lang="scss">
.MyInput {
  position: relative;

  &__placeholder {
    position: absolute;
    bottom: 50%;
    left: 0;
    transform: translate(0, 50%);
    transition: all 0.1s ease 0s;
    &.active {
      transition: all 0.1s ease 0s;
      bottom: 100%;
      transform: translate(0, 0);
    }
  }

  &.admin {
    font-size: em(18);
    font-style: normal;
    font-weight: 400;
    line-height: em(25, 18); /* 178.571% */
    letter-spacing: -0.28px;
    .MyInput__placeholder {
      color: rgb(0, 0, 0, 0.5);
      font-size: em(13);
      font-style: normal;
      font-weight: 400;
      line-height: em(13, 13); /* 178.571% */
      letter-spacing: -0.28px;
      &.active {
        font-size: em(18);
      }
    }
    input {
      padding: em(5) em(0);
      min-width: em(400);
      width: 100%;
      border-bottom: 1px solid #9a9a9a;
      transition: all 0.3s ease 0s;
      &:focus {
        transition: all 0.3s ease 0s;
        border-bottom: 1px solid $hoverColor;
      }
    }
  }
  &.login {
    &.active {
      input {
        border: 1px solid $hoverColor;
      }
    }
    input {
      transition: all 0.3s ease 0s;
      border: 1px solid #ced4d7;
      background: #fff;
      padding: em(15) em(10);
      font-size: em(14);
      width: em(352);
      font-weight: 500;
      line-height: em(20, 14); /* 166.667% */
    }
  }
  &.search {
    position: relative;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease 0s;
    &.active {
      transition: all 0.3s ease 0s;
      opacity: 1;
      pointer-events: visible;
    }
    &::before {
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translate(0, -50%);
      z-index: 2;
    }
    input {
      border-radius: 30px;
      transition: all 0.3s ease 0s;
      border: 1px solid #000000;
      background: #fff;
      padding: em(10) em(20);
      font-size: em(16);
      width: 100%;
      font-weight: 500;
      line-height: em(20, 15); /* 166.667% */
    }
  }
}
</style>

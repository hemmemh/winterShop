<template lang="">
  <div :class="`MyRadio ${radioClass} ${radioChecked ? 'active' : ''}`">
    <input
      :id="value"
      ref="inputRef"
      type="radio"
      :name="name"
      :checked="checked"
      :value="value"
      @change="setValue"
    />
    <label :for="value">
      <slot name="header"></slot>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  props: {
    radioClass: {
      type: String,
      default: 'origin',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
  },
  setup() {
    return {
      inputRef: ref(null),
    };
  },
  data() {
    return {
      radioChecked: false,
    };
  },
  watch: {
    modelValue(e) {
      if (e === this.value) {
        this.radioChecked = true;
      } else {
        this.radioChecked = false;
      }
    },
  },
  mounted() {
    console.log(this.modelValue, this.value, 'tty');
    if (this.modelValue === this.value) {
      this.radioChecked = true;
    } else {
      this.radioChecked = false;
    }
  },

  methods: {
    setValue() {
      console.log(this.modelValue, 'tyy');
      this.$emit('update:modelValue', this.value);
    },
  },
};
</script>
<style lang="scss">
.MyRadio {
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  &.navMenu {
    .radio__item {
      font-size: em(14);
      font-weight: 500;
      line-height: em(25, 14); /* 178.571% */
      letter-spacing: -0.28px;
      transition: all 0.3s ease 0s;
    }
    .radio__button {
      width: em(16);
      height: em(16);
      border: 1px solid #000;
      border-radius: 50%;
      transition: all 0.3s ease 0s;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        content: '';
        width: em(8);
        height: em(8);
        background: #eb5757;
        border-radius: 50%;
        transform: scale(0);
        transform-origin: center;
        transition: all 0.3s ease 0s;
      }
    }

    &.active {
      .radio__item {
        transition: all 0.3s ease 0s;
        color: #eb5757;
      }

      .radio__button {
        transition: all 0.3s ease 0s;
        border: 1px solid #eb5757;
        &::before {
          transform: scale(1);
          transition: all 0.3s ease 0s;
        }
      }
    }
  }
  &.productColor {
    .color-product {
      .color-product &__hexCover {
        width: em(70);
        height: em(80);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease 0s;
        @media (any-hover: hover) {
          &:hover {
            transition: all 0.3s ease 0s;
            background: rgb(0, 0, 0, 0.1);
          }
        }
      }

      &__hex {
        box-sizing: border-box;
        width: em(10);
        height: em(60);
        border-radius: 10px;
        border: 0.5px solid #000;
      }
    }
  }
  &.active {
    .color-product__hexCover {
      box-sizing: border-box;
      border: 1px solid var(--Grey, #ced4d7);
      background: var(--Light-Grey, #f9f9f9);
    }
  }
  &.productSize {
    .sizes-product__size {
      transition: all 0.3s ease 0s;
      background: var(--Light-Grey, #f9f9f9);
      @media (any-hover: hover) {
        &:hover {
          transition: all 0.3s ease 0s;
          background: rgb(0, 0, 0, 0.2);
        }
      }
      width: em(50);
      height: em(50);
      font-size: em(14);
      font-weight: 400;
      line-height: em(25, 14); /* 178.571% */
      letter-spacing: -0.28px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.active {
      .sizes-product__size {
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>

<template lang="">
  <div :class="`MyNumber ${numberClass}`">
    <input
      :id="id"
      type="number"
      :value="modelValue"
      :placeholder="placeholder"
      @blur="setValue"
      @keydown="keyDone"
    />
  </div>
</template>
<script>
export default {
  props: {
    numberClass: {
      type: String,
      default: 'origin',
    },
    placeholder: {
      type: String,
      default: '',
    },
    id: {
      type: String,
    },
    modelValue: {
      type: Number,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
  },

  methods: {
    setValue(e) {
      let num = +e.target.value;
      if (+e.target.value < this.min) {
        num = this.min;
      }

      if (+e.target.value > this.max) {
        num = this.max;
      }
      this.$emit('update:modelValue', num, e.target.value);
      e.target.value = num;
    },
    keyDone(e) {
      console.log(e);
      if (e.keyCode === 13) {
        this.setValue(e);
      }
    },
  },
};
</script>
<style lang="scss">
.MyNumber {
  &.navMenu {
    input {
      box-sizing: border-box;
      background: #f9f9f9;
      width: em(109, 14);
      padding: em(5, 14) em(10, 14);
      font-size: em(14);

      font-weight: 600;
      line-height: em(25, 14); /* 178.571% */
      letter-spacing: -0.28px;
      border: #f9f9f9 1px solid;
      @media (max-width: $mobile) {
        width: em(80, 14);
      }
      &:focus {
        box-sizing: border-box;
        border: $hoverColor 1px solid;
      }
    }
  }
  &.basket {
    background: #fff;
    display: flex;
    justify-content: center;
    input {
      text-align: center;
    }
  }
  &.admin {
    width: 100%;
    input {
      width: 100%;
      border-bottom: 1px solid #000;
      padding: em(5);
    }
  }
}
</style>

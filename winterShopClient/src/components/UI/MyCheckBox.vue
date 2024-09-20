<template lang="">
  <div :class="`MyCheckBox ${CheckBoxClass} ${boxChecked ? 'active' : ''}`">
    <input
      :id="value"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
      @change="setValue"
    />
    <label :for="value">
      <slot name="header"></slot>
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  props: {
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
      type: Array,
    },
    CheckBoxClass: {
      type: String,
      default: 'origin',
    },
  },
  setup() {
    return {};
  },

  data() {
    return {
      boxChecked: false,
    };
  },
  watch: {
    modelValue: {
      handler() {
        console.log('tyt', this.modelValue);
        if (this.modelValue.includes(this.value)) {
          this.boxChecked = true;
        } else {
          this.boxChecked = false;
        }
      },
      deep: true,
    },
  },
  mounted() {
    console.log(this.modelValue, 'tu');
    if (this.modelValue.includes(this.value)) {
      this.boxChecked = true;
    }
  },
  methods: {
    setValue() {
      const arr = this.modelValue;
      if (this.modelValue.includes(this.value)) {
        this.boxChecked = false;
        arr.splice(arr.indexOf(this.value), 1);
        this.$emit('update:modelValue', arr);
      } else {
        this.boxChecked = true;
        arr.push(this.value);
        this.$emit('update:modelValue', arr);
      }
    },
  },
};
</script>
<style lang="scss">
.MyCheckBox {
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  &.origin {
    .checkbox__item {
      font-size: em(14);
      font-weight: 500;
      line-height: em(25, 14); /* 178.571% */
      letter-spacing: -0.28px;
      transition: all 0.3s ease 0s;
    }
    .checkbox__button {
      transition: all 0.3s ease 0s;
      box-sizing: border-box;
      width: em(16);
      height: em(16);
      border: 1px solid #000;
      border-radius: 50%;
      transition: all 0.3s ease 0s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .color-checkbox {
      display: flex;
      gap: em(6);
      &__hex {
        width: em(5);
        height: em(16);
        border-radius: 10px;
        border: 0.5px solid;
      }

      &__name {
      }
    }

    &.active {
      .checkbox__button {
        background: $hoverColor;
        border: none;
      }
    }
  }
}
</style>

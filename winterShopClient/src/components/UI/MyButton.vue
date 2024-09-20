<template lang="">
  <button
    ref="buttonRef"
    :class="`Button ${className}`"
    @click="click"
    @mousedown="rippleEffect"
  >
    <div className="Button__cover">
      <div :class="`Button__absolute ${classNameCover}`">
        <span class="textButton"><slot></slot></span>
      </div>
    </div>
  </button>
</template>
<script>
import { ref } from 'vue';
export default {
  props: {
    clickButton: {
      type: () => {},
    },
    ripple: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
      default: 'origin',
    },
    classNameCover: {
      type: String,
      default: 'origin',
    },
    rippleClass: {
      type: String,
      default: 'origin',
    },
  },

  setup() {
    return {
      buttonRef: ref(null),
    };
  },
  methods: {
    rippleEffect(e) {
      if (this.ripple) {
        e.stopPropagation();
        const circle = document.createElement('span');
        e.target.addEventListener('mouseup', () => {
          circle.style.opacity = '0';
          circle.addEventListener('transitionend', () => {
            circle.remove();
          });
        });
        e.target.addEventListener('mouseout', () => {
          circle.style.opacity = '0';
          circle.addEventListener('transitionend', () => {
            circle.remove();
          });
        });

        e.target.appendChild(circle);
        const diameter = Math.max(e.target.clientWidth, e.target.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - radius - this.buttonRef.getBoundingClientRect().left}px`;
        circle.style.top = `${e.clientY - radius - this.buttonRef.getBoundingClientRect().top}px`;
        circle.classList.add(`ripple`);
        circle.classList.add(this.rippleClass);
      }
    },
  },
};
</script>

<style lang="scss">
.Button {
  overflow: hidden;
  position: relative;
  pointer-events: inherit;
  width: 200px;
  &__cover {
    position: relative;
    padding: 0 0 1 * 100% 0;
    width: 100%;
    height: 100%;
  }
  &__absolute {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .textButton {
      pointer-events: none;
      position: relative;
      z-index: 2;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.basket {
    transition: all 0.3s ease 0s;
    width: 100%;
    @media (max-width: $tablet) {
      width: em(300);
    }
    @media (max-width: $mobileSmall) {
      width: 100%;
    }
    &._d {
      width: 100%;
    }
    background: $hoverColor;
    color: #fff;
    font-size: em(18);
    font-weight: 500;
    line-height: em(20, 18); /* 111.111% */

    text-transform: uppercase;
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.3s ease 0s;
        color: rgb(255, 255, 255, 0.5);
      }
    }
    .Button__cover {
      padding: 0 0 70/418 * 100% 0;
    }
  }

  &.rating {
    transition: all 0.3s ease 0s;
    width: em(184);
    @media (max-width: $tablet) {
      width: em(134);
    }
    @media (max-width: $mobile) {
      width: em(40);
      border-radius: 50%;
      span {
        display: none;
      }
    }
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.3s ease 0s;
        color: rgb(255, 255, 255, 0.5);
      }
    }
    background: $mainColor;
    font-size: em(14);
    font-weight: 500;
    line-height: em(14, 25); /* 178.571% */
    letter-spacing: -0.28px;
    color: #fff;
    .Button__cover {
      padding: 0 0 50/184 * 100% 0;
      @media (max-width: $mobile) {
        padding: 0 0 100% 0;
      }
    }
    .Button__absolute {
      @media (max-width: $mobile) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &::before {
        font-size: 12px;
        position: relative;
        top: 2px;
        @media (min-width: $mobile) {
          display: none;
        }
      }
    }
  }

  &.login {
    transition: all 0.3s ease 0s;
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.3s ease 0s;
        color: rgb(255, 255, 255, 0.5);
      }
    }
    width: 100%;
    background: #000;
    font-size: em(16);
    font-style: normal;
    font-weight: 500;
    line-height: em(16, 30);
    color: #fff;
    &._reg {
      border: 1px solid #000;
      color: #000000;
      background: #fff;
      transition: all 0.3s ease 0s;
      @media (any-hover: hover) {
        &:hover {
          transition: all 0.3s ease 0s;
          color: rgb(000, 000, 000, 0.5);
        }
      }
    }
    .Button__cover {
      padding: 0 0 50/352 * 100% 0;
    }
  }
  &.buy {
    width: 100%;
    @media (max-width: $mobile) {
      width: em(400);
    }
    @media (max-width: $mobileSmall) {
      width: 100%;
    }
    transition: all 0.3s ease 0s;
    background: var(--Light-Grey, #f9f9f9);
    color: #828b8d;
    font-size: em(18);
    font-weight: 500;
    line-height: em(30, 18); /* 166.667% */
    letter-spacing: -0.36px;
    text-transform: uppercase;
    @media (any-hover: hover) {
      &:hover {
        transition: all 0.3s ease 0s;
        color: rgb(130, 139, 141, 0.5);
      }
    }
    .Button__cover {
      padding: 0 0 70/418 * 100% 0;
    }
  }
}

.ripple {
  &.origin {
    background-color: rgba(173, 158, 158, 0.7);
    border: 1px solid #f7f6f6;
  }
  &.basket {
    background-color: rgba(173, 158, 158, 0.7);
    border: 1px solid #f7f6f6;
  }
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  pointer-events: none;
  animation: ripple 600ms linear forwards;
  transition: all 0.6s ease 0s;
  transform-origin: center;
  @keyframes ripple {
    0% {
      border-radius: 50%;
      transform: scale(0);
    }
    100% {
      border-radius: 50%;
      transform: scale(2);
    }
  }
}
</style>

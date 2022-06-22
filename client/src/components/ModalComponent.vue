<template>
  <div class="modal-wraper">
    <div @click="close" class="overlay"></div>
    <transition name="modal">
      <div class="modal active">
        <div class="modal-header">
          <h3>
            <slot name="title"></slot>
          </h3>
          <button class="close" @click="close">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wraper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(#000000, 0.3);
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 15px;
  z-index: 100;
  max-width: 700px;
  width: 100%;
  height: fit-content;

  &.active {
    display: block;
  }

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }
  .modal-header {
    display: flex;
    .close {
      margin-left: auto;
      border: none;
      background-color: transparent;

      ion-icon {
        width: 20px;
        height: 20px;
      }
    }
  }

  form {
    margin-top: 20px;
  }
}
</style>
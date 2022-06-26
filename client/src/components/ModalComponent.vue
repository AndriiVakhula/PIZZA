<template>
  <div class="modal-wraper">
    <div @click="close" class="overlay"></div>
    <transition name="modal">
      <div class="modal active">
        <div class="modal-header">
          <h3 class="page-title">
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

</style>
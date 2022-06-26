<template>
  <component :is="layout + '-layout'" />
</template>

<script>
import AuthenticationLayout from './layouts/AuthenticationLayout.vue';
import AdminLayout from './layouts/AdminLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  },
  components: {
    AuthenticationLayout,
    MainLayout,
    AdminLayout
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/style.scss';
</style>
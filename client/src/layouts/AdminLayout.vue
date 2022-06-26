<template>
  <div class="admin-layout">
    <sidebar-component />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";

export default {
  components: {
    SidebarComponent,
  },
};
</script>

<style lang="scss" scoped>

</style>


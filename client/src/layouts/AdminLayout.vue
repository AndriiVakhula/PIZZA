<template>
  <div class="admin">
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
.admin {
  padding-left: 250px;
  min-height: 100vh;
  background: #E9ECEF;

  .content {
    padding: 40px;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #181C25;
  }
}
</style>


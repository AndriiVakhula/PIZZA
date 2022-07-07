<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h1>Pizza</h1>
    </div>

    <ul class="sidebar-menu">
      <li class="nav-item">
        <router-link :to="{ name: 'AdminDasboard' }">
          <ion-icon name="grid"></ion-icon>
          <p>Dasboard</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'AdminCategory' }">
          <ion-icon name="copy"></ion-icon>
          <p>Category</p>
        </router-link>
      </li>
       <li class="nav-item">
        <router-link :to="{ name: 'AdminPizza' }">
          <ion-icon name="pizza"></ion-icon>
          <p>Pizza</p>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>
<style>
</style>
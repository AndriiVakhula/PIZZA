<template>
  <div>
    <div class="head-page">
      <h1>Category</h1>

      <button class="main-btn">Add category</button>
    </div>

    <div>
      <ul v-if="this.categories.length">
        <li v-for="category in categories" :key="category.id">
          {{ category.name }}
        </li>
      </ul>

      <div v-else>No category</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  mounted() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions(["fetchCategories"]),
  },
  computed: {
    ...mapGetters({
      categories: "allCategories",
    }),
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #181c25;
}

.head-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.main-btn {
  padding: 8px 24px;
  background: #08b1ba;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}
</style>
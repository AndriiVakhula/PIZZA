<template>
  <div>
    <div class="head-page">
      <h1 class="page-title">Category</h1>

      <modal-component v-if="showAddModal" @close="closeAddCategoryModal">
        <template v-slot:title> Add category </template>
        <template v-slot:content>
          <form @submit.prevent="createCategoryHandler">
            <div class="form-group" :class="{ invalid: v$.newCategoryName.$errors.length }">
              <label for="category-name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="category-name"
                v-model.trim="newCategoryName"
              />
              <div
                v-for="(error, index) of v$.newCategoryName.$errors"
                :key="`error-${index}`"
              >
                <div class="error-message">{{ error.$message }}</div>
              </div>
            </div>
            <div class="modal-footer d-flex">
              <button
                class="btn second-btn ml-auto"
                @click.prevent="closeAddCategoryModal"
              >
                Cancel
              </button>
              <button type="submit" class="btn main-btn">Add</button>
            </div>
          </form>
        </template>
      </modal-component>

      <button @click.prevent="openAddCategoryModal" class="btn main-btn">
        Add category
      </button>
    </div>

    <div>
      <ul v-if="this.categories.length">
        <category-item
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </ul>

      <div v-else>No category</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import ModalComponent from "../../components/ModalComponent.vue";
import CategoryItem from "../../components/admin/CategoryItem.vue";

export default {
  setup: () => ({ v$: useVuelidate() }),
  mounted() {
    this.fetchCategories();
  },
  data() {
    return {
      newCategoryName: null,
      showAddModal: false,
    };
  },
  validations() {
    return {
      newCategoryName: {
        required,
      },
    };
  },
  methods: {
    ...mapActions(["fetchCategories", "addNewCategory"]),
    openAddCategoryModal() {
      this.showAddModal = true;
    },
    closeAddCategoryModal() {
      this.showAddModal = false;
    },
    createCategoryHandler() {
      
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      const category = {
        name: this.newCategoryName,
      };

      this.addNewCategory(category);

      this.newCategoryName = null;
      this.closeAddCategoryModal();
    },
  },
  computed: {
    ...mapGetters({
      categories: "allCategories",
    }),
  },
  components: {
    ModalComponent,
    CategoryItem,
  },
};
</script>

<style scoped lang="scss">
</style>
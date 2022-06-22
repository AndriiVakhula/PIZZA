<template>
  <div>
    <div class="head-page">
      <h1>Category</h1>

      <modal-component v-if="showAddModal" @close="closeAddCategoryModal">
        <template v-slot:title> Add category </template>
        <template v-slot:content>
          <form @submit.prevent="createCategoryHandler">
            <div class="input-item">
              <label for="category-name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="category-name"
                v-model.trim="newCategoryName"
              />
            </div>
            <div class="modal-footer d-flex">
              <button
                class="second-btn ml-auto"
                @click.prevent="closeAddCategoryModal"
              >
                Cancel
              </button>
              <button type="submit" class="main-btn">Add</button>
            </div>
          </form>
        </template>
      </modal-component>

      <button @click.prevent="openAddCategoryModal" class="main-btn">
        Add category
      </button>
    </div>

    <div>
      <ul v-if="this.categories.length">
        <li
          v-for="category in categories"
          :key="category.id"
          class="category-item"
        >
          <p>
            {{ category.name }}
          </p>

          <button @click="deleteCategoryHandler(category.id)" class="circle-btn">
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </li>
      </ul>

      <div v-else>No category</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalComponent from "../../components/ModalComponent.vue";
export default {
  mounted() {
    this.fetchCategories();
  },
  data() {
    return {
      newCategoryName: null,
      showAddModal: false,
    };
  },
  methods: {
    ...mapActions(["fetchCategories", "addNewCategory", "deleteCategory"]),
    openAddCategoryModal() {
      this.showAddModal = true;
    },
    closeAddCategoryModal() {
      this.showAddModal = false;
    },
    createCategoryHandler() {
      const category = {
        name: this.newCategoryName,
      };

      this.addNewCategory(category);

      this.newCategoryName = null;
      this.closeAddCategoryModal();
    },
    deleteCategoryHandler(id) {
      console.log(id)

      this.deleteCategory(id);
    },
  },
  computed: {
    ...mapGetters({
      categories: "allCategories",
    }),
  },
  components: {
    ModalComponent,
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

.input-item {
  display: flex;
  flex-direction: column;

  input {
    padding: 8px 10px;
    border: 1px solid #ccc;
  }
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  .main-btn {
    margin-left: 10px;
  }
}

.category-item {
  width: 100%;
  box-shadow: 0px 10px 13px rgba(17, 38, 146, 0.05);
  border-radius: 8px;
  background: #fff;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}

.circle-btn {
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: #f4f5f8;
}
</style>
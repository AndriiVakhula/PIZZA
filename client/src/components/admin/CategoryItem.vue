<template>
  <li class="category-item">
    <p v-if="!editing">
      {{ category.name }}
    </p>

    <form v-else class="edit-form" @submit.prevent="editCategoryHandler">
      <div
        class="form-group"
        :class="{ invalid: v$.categoryName.$errors.length }"
      >
        <input
          :class="{ invalid: v$.categoryName.$errors.length }"
          type="text"
          v-model="categoryName"
        />

        <div
          v-for="(error, index) of v$.categoryName.$errors"
          :key="`error-${index}`"
        >
          <div class="error-message">{{ error.$message }}</div>
        </div>
      </div>

      <button type="submit" class="action-btn">
        <ion-icon name="checkmark"></ion-icon>
      </button>
      <button class="action-btn" @click.prevent="stopEditCategory">
        <ion-icon name="close"></ion-icon>
      </button>
    </form>

    <button @click="editCategory" class="action-btn edit-category-btn">
      <ion-icon name="create"></ion-icon>
    </button>

    <button @click="deleteCategoryHandler" class="action-btn">
      <ion-icon name="trash"></ion-icon>
    </button>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),
  mounted() {
    this.categoryName = this.category.name;
  },
  props: {
    category: {
      id: Number,
      name: String,
    },
  },
  data() {
    return {
      categoryName: null,
      editing: false,
    };
  },
  validations() {
    return {
      categoryName: {
        required,
      },
    };
  },
  methods: {
    ...mapActions(["deleteCategory", "updateCategory"]),
    deleteCategoryHandler() {
      const id = this.category.id;

      this.deleteCategory(id);
    },
    editCategory() {
      this.editing = true;
    },
    editCategoryHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      const category = {
        id: this.category.id,
        name: this.categoryName,
      };

      this.updateCategory(category);
      this.editing = false;
    },
    stopEditCategory() {
      this.editing = false;
    },
  },
};
</script>

<style scoped lang="scss">
.category-item {
  box-shadow: 0px 10px 13px rgba(17, 38, 146, 0.05);
  border-radius: 8px;
  background: #fff;
  padding: 20px 30px;
  display: flex;
  align-items: center;

  .edit-category-btn {
    margin-left: auto;
    margin-right: 15px;
  }

  .edit-form {
    display: flex;
    align-items: center;

    .form-group {
      margin-right: 30px;
    }
    .action-btn {
      margin-right: 10px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
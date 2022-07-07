<template>
  <div>
    <div class="head-page">
      <h1 class="page-title">Pizza</h1>

      <modal-component v-if="showAddModal" @close="closeAddPizzaModal">
        <template v-slot:title> Add pizza </template>
        <template v-slot:content>
          <form @submit.prevent="addNewPizzaHandler">
            <div
              class="form-group"
              :class="{ invalid: v$.newPizzaName.$errors.length }"
            >
              <label for="pizza-name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="pizza-name"
                v-model="newPizzaName"
              />
              <div
                v-for="(error, index) of v$.newPizzaName.$errors"
                :key="`error-${index}`"
              >
                <div class="error-message">{{ error.$message }}</div>
              </div>
            </div>

            <div
              class="form-group"
              :class="{ invalid: v$.newPizzaPrice.$errors.length }"
            >
              <label for="pizza-price" class="form-label">Price</label>
              <input
                type="text"
                class="form-control"
                id="pizza-price"
                v-model="newPizzaPrice"
              />
              <div
                v-for="(error, index) of v$.newPizzaPrice.$errors"
                :key="`error-${index}`"
              >
                <div class="error-message">{{ error.$message }}</div>
              </div>
            </div>

            <div
              class="form-group"
              :class="{ invalid: v$.newPizzaCategoryId.$errors.length }"
            >
              <label for="pizza-category" class="form-label">Category</label>
              <select
                class="form-control"
                id="pizza-category"
                v-model="newPizzaCategoryId"
              >
                <option value="" disabled>Select category</option>
                <option
                  v-for="category in categories"
                  :value="category.id"
                  :key="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
              <div
                v-for="(error, index) of v$.newPizzaName.$errors"
                :key="`error-${index}`"
              >
                <div class="error-message">{{ error.$message }}</div>
              </div>
            </div>

            <div
              class="form-group"
              :class="{ invalid: v$.newPizzaImage.$errors.length }"
            >
              <label for="pizza-file" class="form-label">Image</label>
              <input
                type="file"
                id="image"
                accept="image/jpeg, image/png"
                @change="fileSelected"
              />
              <div
                v-for="(error, index) of v$.newPizzaImage.$errors"
                :key="`error-${index}`"
              >
                <div class="error-message">{{ error.$message }}</div>
              </div>
            </div>

            <div
              class="form-group"
              :class="{ invalid: v$.newPizzaDescription.$errors.length }"
            >
              <label for="pizza-description" class="form-label"
                >Description</label
              >
              <textarea
                name="pizza-description"
                id="pizza-description"
                v-model="newPizzaDescription"
              ></textarea>
              <div
                v-for="(error, index) of v$.newPizzaDescription.$errors"
                :key="`error-${index}`"
              >
                <div class="error-message">{{ error.$message }}</div>
              </div>
            </div>

            <div class="modal-footer d-flex">
              <button
                class="btn second-btn ml-auto"
                @click.prevent="closeAddPizzaModal"
              >
                Cancel
              </button>
              <button type="submit" class="btn main-btn">Add</button>
            </div>
          </form>
        </template>
      </modal-component>

      <button @click.prevent="openAddPizzaModal" class="btn main-btn">
        Add pizza
      </button>
    </div>

    <div v-if="!loading">
      <div v-if="pizzas.length">
        <pizza-item v-for="pizza of pizzas" :key="pizza.id" :pizza="pizza" />
      </div>
      <div v-else>
        <div>No pizza</div>
      </div>
    </div>
    <loader-component v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
import ModalComponent from "../../components/ModalComponent.vue";
import LoaderComponent from "../../components/LoaderComponent.vue";
import PizzaItem from "../../components/admin/PizzaItem.vue";

export default {
  setup: () => ({ v$: useVuelidate() }),
  mounted() {
    this.fetchPizzas();
    if (!this.categories.length) {
      this.fetchCategories();
    }
  },
  data() {
    return {
      showAddModal: false,
      newPizzaName: null,
      newPizzaPrice: null,
      newPizzaDescription: null,
      newPizzaImage: null,
      newPizzaCategoryId: null,
    };
  },
  validations() {
    return {
      newPizzaName: {
        required,
      },
      newPizzaPrice: {
        required,
        numeric,
      },
      newPizzaDescription: {
        required,
      },
      newPizzaImage: {
        required,
      },
      newPizzaCategoryId: {
        required,
      },
    };
  },
  methods: {
    ...mapActions(["addNewPizza", "fetchPizzas", "fetchCategories"]),
    openAddPizzaModal() {
      this.showAddModal = true;
    },
    closeAddPizzaModal() {
      this.showAddModal = false;
    },
    fileSelected(event) {
      this.newPizzaImage = event.target.files[0];
    },
    addNewPizzaHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      const pizza = {
        name: this.newPizzaName,
        price: this.newPizzaPrice,
        description: this.newPizzaDescription,
        image: this.newPizzaImage,
        categoryId: this.newPizzaCategoryId,
      };

      this.addNewPizza(pizza);
      this.closeAddPizzaModal();

      this.newPizzaName = null;
      this.newPizzaPrice = null;
      this.newPizzaDescription = null;
      this.newPizzaImage = null;
    },
  },
  computed: {
    ...mapGetters({
      loading: "loading",
      pizzas: "allPizzas",
      categories: "allCategories",
    }),
  },
  components: {
    ModalComponent,
    LoaderComponent,
    PizzaItem,
  },
};
</script>

<style scoped lang="scss">
</style>
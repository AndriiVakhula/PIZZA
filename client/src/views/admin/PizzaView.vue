<template>
  <div>
    <div class="head-page">
      <h1 class="page-title">Pizza</h1>

      <modal-component v-if="showAddModal" @close="closeAddPizzaModal">
        <template v-slot:title> Add pizza </template>
        <template v-slot:content>
          <form @submit.prevent="addNewPizzaHandler">
            <div class="form-group">
              <label for="pizza-name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="pizza-name"
                v-model="newPizzaName"
              />
            </div>

            <div class="form-group">
              <label for="pizza-price" class="form-label">Price</label>
              <input
                type="text"
                class="form-control"
                id="pizza-price"
                v-model="newPizzaPrice"
              />
            </div>

            <div class="form-group">
              <label for="pizza-file" class="form-label">Image</label>
              <input type="file" id="image" accept="image/jpeg, image/png" @change="fileSelected"/>
            </div>

            <div class="form-group">
              <label for="pizza-description" class="form-label"
                >Description</label
              >
              <textarea
                name="pizza-description"
                id="pizza-description"
                v-model="newPizzaDescription"
              ></textarea>
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

    <div v-if="pizzas.length">
      <pizza-item v-for="pizza of pizzas" :key="pizza.id" :pizza="pizza" />
    </div>
    <div v-else>
      <div>No pizza</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalComponent from "../../components/ModalComponent.vue";
import PizzaItem from "../../components/admin/PizzaItem.vue";
export default {
  mounted() {
    this.fetchPizzas();
  },
  data() {
    return {
      showAddModal: false,
      newPizzaName: null,
      newPizzaPrice: null,
      newPizzaDescription: null,
      newPizzaImage: null,
    };
  },
  methods: {
    ...mapActions(["addNewPizza", "fetchPizzas"]),
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
      const pizza = {
        name: this.newPizzaName,
        price: this.newPizzaPrice,
        description: this.newPizzaDescription,
        image: this.newPizzaImage,
      };

      this.addNewPizza(pizza);
      this.closeAddPizzaModal();
    
      // TODO:clear new pizza fields
    },
  },
  computed: {
    ...mapGetters({
      pizzas: "allPizzas",
    }),
  },
  components: {
    ModalComponent,
    PizzaItem,
  },
};
</script>

<style scoped lang="scss">
</style>
<template>
  <div class="pizza-item">
    <img :src="'http://localhost:5000/' + pizza.image" alt="" />
    <div class="pizza-content">
      <div class="pizza-item-head">
        <p class="pizza-name"><span>Name:</span> {{ pizza.name }}</p>
        <p class="pizza-price"><span>Price:</span> {{ pizza.price }} $</p>
      </div>
        <p class="pizza-category"><span>Category:</span> {{pizza.category.name}}</p>
      <p class="pizza-description">
        <span>Description:</span> {{ pizza.description }}
      </p>
    </div>

    <div class="pizza-item-action">
      <button @click="deletePizzaHandler" class="action-btn">
        <ion-icon name="trash"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    pizza: {
      id: Number,
      name: String,
      price: Number,
      description: String,
      image: String,
      category: {
        id: Number,
        name: String,
      },
    },
  },
  methods: {
    ...mapActions(["deletePizza"]),
    deletePizzaHandler() {
      this.deletePizza(this.pizza.id);
    },
  },
};
</script>

<style lang="scss">
.pizza-item {
  position: relative;
  display: flex;
  padding: 10px 20px;
  margin: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;

  img {
    height: 180px;
    object-fit: cover;
    margin-right: 20px;
  }

  .pizza-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .pizza-item-head {
    display: flex;
  }

  .pizza-price,
  .pizza-name {
    margin-right: 50px;
  }

  span {
    font-weight: 700;
  }

  p {
    font-size: 1.3rem;
  }

  .pizza-description {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }

  .pizza-item-action {
    position: absolute;
    right: 0;
    top: 10px;
    right: 15px;
  }
}
</style>
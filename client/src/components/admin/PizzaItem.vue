<template>
    <div class="pizza-item">
        {{pizza.name}}

        <img :src="'http://localhost:5000/' + pizza.image" alt="">
    </div>

</template>

<script>
export default {
  props: {
    pizza: {
        id: Number,
        name: String,
        price: Number,
        description: String,
        image: String,
    }
  },
};
</script>

<style>
</style>
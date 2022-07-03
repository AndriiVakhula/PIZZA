import { host } from "../../common/http"

export default {
    state: {
        pizza: []
    },
    mutations: {
        addPizza(state, pizza) {
            state.pizza.push(pizza);
        },
        setPizza(state, pizzas) {
            state.pizza = pizzas;
        }
    },
    actions: {
        fetchPizzas({ commit }) {
            host.get("/pizza")
            .then(({data}) => {
                commit("setPizza", data);
            })
            .catch(err => {
                console.log(err);
            })
        },
        addNewPizza({commit}, pizza) {
            const formData = new FormData();

            formData.append("name", pizza.name);
            formData.append("price", pizza.price);
            formData.append("description", pizza.description);
            formData.append("image", pizza.image);

            host.post('pizza', formData)
            .then(({data}) => {
                console.log(data);
                commit('addPizza', data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    getters: {
        allPizzas(state) {
            return state.pizza;
        }
    }
}
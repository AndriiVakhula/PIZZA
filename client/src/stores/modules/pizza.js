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
        },
        removePizza(state, pizzaId) {
            const index = state.pizza.findIndex(
              (pizza) => pizza.id == pizzaId
            );
            state.pizza.splice(index, 1);
        },
    },
    actions: {
        fetchPizzas({ commit }) {
            commit("startLoading");
            
            host.get("/pizza")
            .then(({data}) => {
                commit("setPizza", data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                commit("stopLoading");
            });
        },
        addNewPizza({commit}, pizza) {
            commit("startLoading");

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
            .finally(() => {
                commit("stopLoading");
            });
        },
        deletePizza({commit}, id) {
            commit("startLoading");

            host.delete(`pizza/${id}`)
            .then(({data}) => {
                commit('removePizza', id)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                commit("stopLoading");
            });
        }
    },
    getters: {
        allPizzas(state) {
            return state.pizza;
        }
    }
}
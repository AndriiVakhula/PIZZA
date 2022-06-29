import { host } from "../../common/http"

export default {
    state: {
        pizza: []
    },
    mutations: {
        addPizza(state, pizza) {
            state.pizza.push(pizza);
        }
    },
    actions: {
        addNewPizza({commit}, pizza) {
            host.post('pizza', pizza)
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

    }
}
import { host } from "../../common/http";

export default {
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    fetchCategories({ commit }) {
       host
        .get("category")
        .then(({ data }) => {
          commit("setCategories", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    allCategories: (state) => state.categories
  },
};

import { host } from "../../common/http";

export default {
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
    updateCategory(state, editCategory) {
      const index = state.categories.findIndex(
        (category) => category.id == editCategory.id
      );
      state.categories[index] = editCategory;
    },
    removeCategory(state, categoryId) {
      const index = state.categories.findIndex(
        (category) => category.id == categoryId
      );
      state.categories.splice(index, 1);
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
    addNewCategory({ commit }, category) {
      host
        .post("category", category)
        .then(({ data }) => {
          commit("addCategory", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCategory({ commit }, category) {
      host
        .put(`category/${category.id}`, {
          name: category.name,
        })
        .then(({ data }) => {
          commit("updateCategory", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCategory({ commit }, id) {
      host
        .delete(`category/${id}`)
        .then((data) => {
          commit("removeCategory", id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    allCategories: (state) => state.categories,
  },
};

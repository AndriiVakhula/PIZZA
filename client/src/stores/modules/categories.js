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
      commit("startLoading");
      host
        .get("category")
        .then(({ data }) => {
          commit("setCategories", data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // console.log('test')
          commit("stopLoading");
        });
    },
    addNewCategory({ commit }, category) {
      commit("startLoading");

      host
        .post("category", category)
        .then(({ data }) => {
          commit("addCategory", data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          commit("stopLoading");
        });
    },
    updateCategory({ commit }, category) {
      commit("startLoading");

      host
        .put(`category/${category.id}`, {
          name: category.name,
        })
        .then(({ data }) => {
          commit("updateCategory", data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          commit("stopLoading");
        });
    },
    deleteCategory({ commit }, id) {
      commit("startLoading");

      host
        .delete(`category/${id}`)
        .then((data) => {
          commit("removeCategory", id);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          commit("stopLoading");
        });
    },
  },
  getters: {
    allCategories: (state) => state.categories,
  },
};

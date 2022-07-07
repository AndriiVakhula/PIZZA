import { createStore } from "vuex";
import categories from './modules/categories';
import pizza from './modules/pizza';

export default createStore({
  state: {
    loading: false,
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    }
  },
  actions: {},
  getters: {
    loading: (state) => state.loading,
  },
  modules: {categories, pizza},
});

import { createStore } from "vuex";
import categories from './modules/categories';
import pizza from './modules/pizza';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {categories, pizza},
});

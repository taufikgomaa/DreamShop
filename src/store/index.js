import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    products: [],
    itemPreview: {
      id: "",
      title: "",
      description: "",
      price: "",
      image: ""
    }
  },
  getters: {
  },
  mutations: {
    addToCart(state, _item) {
      let existBefore = false
      for (let item of state.cart) {
        if (item.product == _item) {
          existBefore = true;
          item.quantity++;
          break;
        }
      }
      if (!existBefore) {
        state.cart.push({
          product: _item,
          quantity: 1
        });
      }
    },
    increaseQuantity(state, _Item) {
      _Item.quantity++;
    },
    decreaseQuantity(state, _Item) {
      _Item.quantity--;
    }
  },
  actions: {
  },
  modules: {
  }
})

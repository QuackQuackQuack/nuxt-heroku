//mutations

export default {
  TOGGLE_LEFT_PANEL(state) {
    state.panel.left = !state.panel.left;
  },
  TOGGLE_RIGHT_PANEL(state) {
    state.panel.right = !state.panel.right;
  },
  UPDATE_LEFT_PANEL(state, payLoad) {
    state.panel.left = payLoad;
  },
  UPDATE_RIGHT_PANEL(state, payLoad) {
    state.panel.right = payLoad;
  },
  GET_INIT_DATA(state, payLoad){
    state.initialData = payLoad;
  },
  INCREMENT(state, targetIndex) {
    state.cart[targetIndex].quantity += 1;
  },
  DECREMENT(state, targetIndex){
    if (state.cart[targetIndex].quantity > 1) {
      state.cart[targetIndex].quantity -= 1;
    }
  },
  ADD_CART(state, payLoad){
    const newCartData = Object.assign({}, payLoad);
    state.cart.push(newCartData);
  },
  ADD_QUANTITY(state, data) {
    state.cart[data.targetIndex].quantity += data.quantity;
  },
  REMOVE_CART(state, payLoad){
    var carts = state.cart;
    carts.splice(carts.indexOf(payLoad), 1);
  },
  CLEAR_CART(state){
    state.cart = [];
  },
  CURRENT_PATH(state, payLoad) {
    state.currentPath = payLoad;
  }
}

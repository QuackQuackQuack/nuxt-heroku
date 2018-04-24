// actions
import findIndex from 'lodash/findIndex'

export default {
  increment({commit}, payLoad){
    const targetIndex = findIndex(this.state.cart, payLoad) || 0;
    commit('INCREMENT', targetIndex);
  },
  decrement({commit}, payLoad){
    const targetIndex = findIndex(this.state.cart, payLoad) || 0;
    commit('DECREMENT', targetIndex);
  },
  addCart({commit}, payLoad) {
    const newCartData = Object.assign({}, payLoad);
    const targetIndex = findIndex(this.state.cart, newCartData);
    const quantity = payLoad.quantity || 1

    if (!payLoad.size) {
      alert('select Item');
      return false;
    }

    // no match in cart
    if (targetIndex === -1) {
      commit('ADD_CART', Object.assign(newCartData, { quantity } ));
    } else {
      const data = {
        targetIndex,
        quantity,
      }
      commit('ADD_QUANTITY', data);
    }
  },
  removeCart({commit}, payLoad) {
    commit('REMOVE_CART', payLoad);
  },
  clearCart({commit}){
    commit('CLEAR_CART');
  },
  async getIntData({commit}, options){
    const { data } = await this.$axios.get(options.url);
    commit('GET_INIT_DATA', data);
  },
  toggleLeftPanel({commit}) {
    commit('TOGGLE_LEFT_PANEL');
  },
  toggleRightPanel({commit}) {
    commit('TOGGLE_RIGHT_PANEL');
  },
}

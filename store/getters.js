// getters
export default {  
  cartProducts: state => state.cart,
  cartQuantity: state => state.cart.length,
  totalPirce: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}
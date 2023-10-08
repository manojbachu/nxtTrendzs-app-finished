// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      const getTotalPrice = cartList.map(eachItem => {
        totalPrice += eachItem.quantity * eachItem.price
        return totalPrice
      })
      console.log(getTotalPrice)
      return (
        <div className="cart-summary">
          <h4 className="order-total">
            Order Total: <span className="total-price">{totalPrice}</span>
          </h4>
          <p className="number-of-item">{cartList.length} Items in cart</p>
          <button type="button" className="continue-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

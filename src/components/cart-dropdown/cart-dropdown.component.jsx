import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { ToggleCartHidden } from '../../redux/cart/cart.action'
import { withRouter } from 'react-router-dom'

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? 
            cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(ToggleCartHidden())
        }} >CHECKOUT</CustomButton>
    </div>
  );
}

const mapState = ({cart: {cartItems} }) => ({
  cartItems,
})

export default withRouter(connect(mapState)(CartDropdown));

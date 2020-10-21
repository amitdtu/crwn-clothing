import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        }
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
}

const mapState = ({cart: {cartItems} }) => ({
  cartItems,
})

export default connect(mapState)(CartDropdown);

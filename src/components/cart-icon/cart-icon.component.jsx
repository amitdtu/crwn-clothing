import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { ToggleCartHidden } from "./../../redux/cart/cart.action";
import { connect } from "react-redux";

function CartIcon({ ToggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={ToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapState = ({ cart: {cartItems} }) => ({
  itemCount: cartItems.reduce((accumelatedQuantity, item) => accumelatedQuantity + item.quantity ,0)
})

export default connect(mapState, mapDispatch)(CartIcon);

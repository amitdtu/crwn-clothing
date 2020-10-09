import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { ToggleCartHidden } from "./../../redux/cart/cart.action";
import { connect } from "react-redux";

function CartIcon({ ToggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={ToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> 0</span>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

export default connect(null, mapDispatch)(CartIcon);

import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { ToggleCartHidden } from "./../../redux/cart/cart.action";
import { createStructuredSelector } from 'reselect'
 
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { connect } from "react-redux";

function CartIcon({ ToggleCartHidden, itemCount }) {
  // console.log('I am being called too...')
  
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

const mapState = createStructuredSelector({
    itemCount: selectCartItemsCount,
})

export default connect(mapState, mapDispatch)(CartIcon);

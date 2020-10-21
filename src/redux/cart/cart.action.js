import CartActionTypes from "./cart.type";
import CartActionType from "./cart.type";

export const ToggleCartHidden = () => {
  console.log(12);
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};

export const AddItem = item => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  }
}

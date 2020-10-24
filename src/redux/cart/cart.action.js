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

export const RemoveItem = item => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  }
}

export const ClearItemFromCart = item => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  }
}

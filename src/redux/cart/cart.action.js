import CartActionType from "./cart.type";

export const ToggleCartHidden = () => {
  console.log(12);
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};

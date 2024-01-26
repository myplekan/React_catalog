import { useDispatch } from "react-redux";
import { Cart } from "../types/Cart";
import { Product } from "../types/product";
import { actions } from "../features/cart";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Dispatch, UnknownAction } from "redux";

export const handleSetCart = (
  newValue: Product,
  cart: Cart[],
  dispatch: Dispatch<UnknownAction>
) => {
  const existingCartItem = cart.find((item) => item.product.id === newValue.id);

  if (existingCartItem) {
    dispatch(actions.remove(newValue.id))
  } else {
    const newCartItem = {
      product: newValue,
      id: newValue.id,
      quantity: 1,
    }
    dispatch(actions.add(newCartItem))
  }
};

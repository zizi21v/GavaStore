import { TYPES } from "./ShoppingActions";
import { Allproducts } from "../Categorias/Data/Categories";


export const ShoppingInitialState = {

  products: Allproducts,
  cart: [ {id:1} ],
};

export function ShoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(product => product.id === action.payload);
      console.log (newItem)
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}

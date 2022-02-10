import { TYPES } from "./ShoppingActions";
import { Allproducts } from "../Categorias/Data/Categories";


export const ShoppingInitialState = {

  products: Allproducts,
  cart: [ {id:1, Quantity:1} ],
};

export function ShoppingReducer(state = ShoppingInitialState, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: 
    return(
      {
        ...state, cart: state.cart.map((item)=> item.id === action.payload ? {...item, Quantity:item.Quantity+1}:item)
      }
    );
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

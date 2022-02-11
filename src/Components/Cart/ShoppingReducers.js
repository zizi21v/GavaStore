import { TYPES } from "./ShoppingActions";
import { Allproducts } from "../Categorias/Data/Categories";


export const ShoppingInitialState = {

  products: Allproducts,
  cart: [  ],
};

export function ShoppingReducer(state=ShoppingInitialState, action) {
  switch (action.type) {
  
    case TYPES.ADD_TO_CART:
      const obj = {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload
            ? { ...item, Quantity: item.Quantity + 1 }
            : item;
        }
        )
      };

      if(obj.cart.find((val) => val.id === action.payload)) {
        return obj
      }
      obj.cart.push({ id: action.payload, Quantity: 1 });
   
      return obj;

      default:
        return state;
  }
}
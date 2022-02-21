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
      case TYPES.REMOVE_ONE_FROM_CART: {
        const obj = {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === action.payload
              ? { ...item, Quantity: item.Quantity - 1 }
              : item;
          }),
        };
        const cartObj = obj.cart.find((val) => val.id === action.payload);
  
        if (cartObj?.Quantity <= 0) {
          obj.cart.splice(obj.cart.indexOf(cartObj), 1);
        }
        return obj;
      }
  

      default:
        return state;
  }
}
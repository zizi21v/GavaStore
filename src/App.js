import "./App.css";
import { useReducer } from "react";
import { CartContext } from "./Components/Context/CartContext";
import { Nav } from "./Pages/Nav/Nav";
import {ShoppingInitialState,
  ShoppingReducer,
} from "./Components/Cart/ShoppingReducers";
import { HashRouter,Route, Routes} from "react-router-dom"
import { Inicio } from "./Pages/Inicio/index";
import { Pagecategories } from "./Components/Categorias/CategoriePage";
import { ShoppingCart } from "./Components/Cart/ShoppingCart"
import { ProductsList } from "./Components/Categorias/CardBox";
import { Products } from "./Components/Products/Products";

 const App = () => {
    const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState);
  return (
    <div className="App">
      <HashRouter>
        
        
        <CartContext.Provider value={[ state, dispatch ]}>
        <Routes>
            <Route path="/" element={<Nav/>}>
            <Route path="/" element= {<Inicio/>}/>
            <Route path="/Inicio" element= {<Inicio/>}/>
            <Route path="/Tops" element= {<ProductsList />} />
            <Route path="/Tshirt" element= { <ProductsList />} />
            <Route path="/Accesories" element= { <ProductsList />}/>
            <Route path="/Pagecategories" element= {<Pagecategories />}/>
            <Route path="/ShoppingCart" element= {<ShoppingCart />}/>
            <Route path="/product/:id" element= {<Products/>}/>
            </Route>



        </Routes>
        </CartContext.Provider>
      </HashRouter>
     
   
     
    </div>
  );
}

export default App;


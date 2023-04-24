import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";

import { Navbar } from "./components/Navbar";

import { ProductDetails } from "./components/ProductDetails";
import { UpdateProduct } from "./components/UpdateProduct";
import { NewProducts } from "./components/NewProducts";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar/>
          <Routes>
               <Route path='/' element={<Products/>} />
               <Route path='/products/:id' element={<ProductDetails/>} />
               <Route path='/NewProducts' element={<NewProducts/>}/>
              
               <Route path='/update/:id' element={<UpdateProduct/>} />
              
          </Routes>
          </BrowserRouter>
     
    </div>
  );
}

export default App;

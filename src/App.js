import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import Products from './Pages/Products/Products';
import Header from './Pages/Header/Header';
import Wishlist from './Pages/Wishlist/Wishlist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

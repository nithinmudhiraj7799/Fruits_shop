
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Fruits from "./pages/Fruits";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
// import Home from "./pages/Home";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
    
      
        <main className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </CartProvider>
  );
};

export default App;







import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

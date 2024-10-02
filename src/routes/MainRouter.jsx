import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavBar from '../components/NavBar/Navbar';
import Category from '../pages/Category';
import Home from '../pages/Home';
import Item from '../pages/Item';
import Memo from '../pages/Memo';
import Payment from '../pages/Payment';
import Checkout from '../pages/Checkout';



Category


const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
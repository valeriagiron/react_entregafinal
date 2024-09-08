import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Item from "../pages/Item";
import NavBar from "../components/NavBar/Navbar";
import Category from "../pages/Category";

const MainRouter = () => {

  //Parametro de URL: es un dato dinamico que se puede pasar a una ruta
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
import React from "react";
import {getProductsByCategory} from "../services/products.services";


const useProductsByCategory = (id) => {
  const [products, setProducts] = React.useState([]);
  console.log("id", id);
  React.useEffect(() => {
    getProductsByCategory(id)
      .then((response) => {
        console.log("category", response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return { products };
};

export default useProductsByCategory;
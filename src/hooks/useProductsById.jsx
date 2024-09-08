import { useState, useEffect } from "react";
import { getProductById } from "../services/products.services"; // Importación nombrada

const useProductsById = (id) => {
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getProductById(id)
        .then((res) => {
          setProductData(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return { productData, loading };
  };

export default useProductsById;

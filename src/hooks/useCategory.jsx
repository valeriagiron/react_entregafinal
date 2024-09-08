import React from "react";
import { getCategories } from "../services/products.services";

const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    getCategories()
      .then((response) => {
        console.log("categories",response.data);
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { category };
};

export default useCategory;
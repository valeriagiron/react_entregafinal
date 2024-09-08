import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import useProductsByCategory from "../hooks/useProductsByIdCategories";
import { useParams } from "react-router";


const Category = () => {
  const { categoryId } = useParams();

  const { products } = useProductsByCategory(categoryId);

  return <ItemListContainer products={products} />;
};

export default Category;
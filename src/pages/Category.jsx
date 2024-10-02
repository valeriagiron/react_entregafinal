import React from "react";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import useProductsByCategory from '../hooks/useProductsByCategory';
import { useParams } from "react-router";
import { Spinner } from "@chakra-ui/react";

const Category = () => {
  const { categoryId } = useParams();

  const { products, loading } = useProductsByCategory(categoryId);

  if (loading) {
    return <Spinner />;
  } else {
    return <ItemListContainer products={products} />;
  }
};

export default Category;
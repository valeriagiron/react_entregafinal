import React from "react";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import useItemsCollection from '../hooks/useItemsCollection';
import { Flex, Spinner, Box } from "@chakra-ui/react";

const Home = () => {
  const { items, loading, error } = useItemsCollection("products");

  return loading ? (
    <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      <Spinner />
    </Flex>
  ) : error ? (
    <Box>
      Hay un error durante la carga de los productos, por favor contactese con
      soporte.
    </Box>
  ) : (
    <ItemListContainer products={items} />
  );
};


export default Home;
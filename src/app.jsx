import { useState } from "react";

import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";


  function App() {

    return (
      <ChakraProvider>
        <Navbar />
        <ItemListContainer greeting={"Bienvenidos"} />
      </ChakraProvider>
    );
};

export default App;
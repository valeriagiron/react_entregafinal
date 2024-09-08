// const Home = () => { 
// return (
// <div>Home</div>
// )
// };
// export default Home;




import { Spinner, Flex } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  const { products, loading } = useProducts();
  console.log("home daata",products)
  return loading ? (
    <Flex
      width={"100%"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  ) : (
    <ItemListContainer products={products} />
  );
};

export default Home;
import { useParams } from "react-router";
import { Flex, Spinner } from "@chakra-ui/react";
import useProductsById from '../hooks/useProductsById';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Item = () => {
  const { id } = useParams();

  const { product, loading } = useProductsById(id);

  return loading ? <Spinner /> : <ItemDetailContainer product={product} />;
};

export default Item;



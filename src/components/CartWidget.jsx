import { Flex, Text } from "@chakra-ui/react"
import { FiShoppingCart } from "react-icons/fi";


const CartWidget = () => {
    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} width={"60px"}>
          <FiShoppingCart size={30}/>
            <Text fontSize={"1.5rem"}>0</Text>
        </Flex>
    );
};

export default CartWidget;
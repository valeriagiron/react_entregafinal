import { 
    Box, 
    Card,
    CardBody,
    CardFooter,
    ButtonGroup,
    Button,
    Divider, // Importación añadida para Divider
    Heading,
    Text,
    Stack,
    Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const ItemListContainer = ({ products }) => {
    console.log("ItemListContainer",products);

    return (
        <Box display="flex" width="100vw" flexWrap="wrap">
            {
                products.map((product) => (
                    <Card key={product.id} maxW="sm" margin="1rem">
                        <CardBody>
                            <Image
                                src={product.images}
                                alt={product.name}
                                borderRadius="lg"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">{product.name}</Heading>
                                <Text>{product.description}</Text>
                                <Text color="blue.600" fontSize="2xl">
                                    ${product.price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing="2">
                                {/* <Button variant="ghost" colorScheme="blue">
                                    Add to cart
                                </Button> */}
                                  <Link to={`/item/${product.id}`}>Ir a Detalle</Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))
            }
        </Box>
    );
};


export default ItemListContainer;
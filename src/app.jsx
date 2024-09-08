import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./Layout/Mainlayout";
import MainRouter from "./routes/MainRouter";


function App() {

  return (

    <ChakraProvider>

      <MainLayout>

        <MainRouter />

      </MainLayout>

    </ChakraProvider>

  );

}
export default App;
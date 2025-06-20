import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Page from "components/Page/Page";
import NavBar from "components/NavBar/NavBar";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Page>
        <NavBar />
      </Page>
    </ChakraProvider>
  );
}

export default App;

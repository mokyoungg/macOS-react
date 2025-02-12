import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import BootUpWindow from "./components/BootUpWindow/BootUpWindow";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BootUpWindow />
    </ChakraProvider>
  );
}

export default App;

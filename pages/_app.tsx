import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme} >
    <Layout>
      <Component {...pageProps} /></Layout>
    </ChakraProvider>
}

export default MyApp

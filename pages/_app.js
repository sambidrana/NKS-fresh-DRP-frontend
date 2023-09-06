import CartContextProvider from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
    scroll-behavior: smooth;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    display: none;
  }
  html, body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}

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
`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

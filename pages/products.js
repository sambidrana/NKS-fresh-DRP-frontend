import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductLayout from "@/components/ProductLayout";
import styled from "styled-components";

const BackgroundImageContainer = styled.div`
  position: relative;
  z-index: 100;
  background-image: url("/images/coming-soon.png");
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  background-size: contain; /* or background-size: cover; */
`;

const ProductsGrid = styled.div`
  display: grid;
  position: relative;
  z-index: 1;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 30px;
`;
const FooterContainer = styled.div`
  margin-top: 200px;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

function Products({ products }) {
  console.log(products);
  return (
    <div>
      <Header />
      <Center>
        <Title>All Products</Title>
        <BackgroundImageContainer>
          <ProductsGrid>
            {products.map((product) => (
              <ProductLayout key={product._id} {...product} />
            ))}
          </ProductsGrid>
        </BackgroundImageContainer>
      </Center>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    const products = await response.json();
    // console.log(products);
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Failed fetching products:", error);
    return {
      props: {
        products: [], // Default empty array
      },
    };
  }
}
export default Products;

// "sc-pqitP fRzomW" Client: "sc-bcPKhP bOUkUw"

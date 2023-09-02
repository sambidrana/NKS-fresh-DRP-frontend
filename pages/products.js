import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductLayout from "@/components/ProductLayout";
import styled from "styled-components";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 30px;
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
        <ProductsGrid>
          {products.map((product) => (
            <ProductLayout key={product._id} {...product} />
          ))}
        </ProductsGrid>
      </Center>
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

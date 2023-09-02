import Center from "./Center";
import ProductLayout from "./ProductLayout";
import styled from "styled-components";

const SliderContainer = styled.div`
  padding: 30px;
`;
const H1 = styled.h1`
  color: rgba(36, 30, 33, 0.8);
`;
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  gap: 20px;
  padding: 30px 0 35px 0;
`;

export default function RecentProducts({ latestProducts }) {
//   console.log(latestProducts);
  return (
    <SliderContainer>
      <H1>Latest Products</H1>
      <Center>
        <ProductsGrid>
          {latestProducts.map((product) => (
            <ProductLayout key={product._id} {...product} />
          ))}
        </ProductsGrid>
      </Center>
    </SliderContainer>
  );
}

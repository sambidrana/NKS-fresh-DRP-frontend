import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CartContext } from "./CartContext";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div``;

const ImgBox = styled(Link)`
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
  height: 180px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
  }
  :hover {
    transform: scale(1.05);
  }
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;
const ProductInfoBox = styled.div`
  margin-top: 10px;
`;
const PriceRow = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const Price = styled.div`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0px;

  }
`;
const BtnContainer = styled.div`
  text-align: center;
`
export default function ProductLayout({
  _id,
  productName,
  description,
  price,
  images,
}) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;

  function addLatestToCart() {
    // setCartProducts(prev => [...prev, _id])
    addProduct(_id);
  }
  return (
    <ProductWrapper>
      <ImgBox href={url}>
        <div>
          <img src={images[0]} />
        </div>
      </ImgBox>
      <ProductInfoBox>
        <Title href={url}>{productName}</Title>
        <PriceRow>
          <Price>AU${price}</Price>
          <BtnContainer>
          <Button onClick={addLatestToCart} $primary $outline>
            Add to cart
          </Button>
          </BtnContainer>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    gap: 40px;
    grid-template-columns: 0.8fr 1.2fr;
  }
`;
const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;
const ProductDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: 20px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: rgba(31, 25, 25, 0.8);
  font-weight: 600;
  padding: 10px;

`;
const PriceRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  Button {
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    justify-content: start;
    Button {
      font-size: 0.9rem;
    }
  }
`;
export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  //   const router = useRouter();
  //   const productId = router.query.id;

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/api/products?id=" + productId)
  //       .then((res) => {
  //         setProduct(res.data);
  //       }).catch(err => {
  //         console.log(err)
  //       });
  //   }, []);

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.productName}</Title>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <PriceRow>
              <Button $primary onClick={() => addProduct(product._id)}>
                <CartIcon /> Add to cart
              </Button>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const { id } = context.query;
  try {
    const response = await fetch(`http://localhost:3000/api/products?id=${id}`);
    const product = await response.json();

    // console.log(product);
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Failed fetching product:", error);

    return {
      props: {
        product: {}, // Default empty array
      },
    };
  }
}

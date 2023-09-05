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
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`;
const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  div {
    font-size: 1.4rem;
  }
  
`;
export default function ProductPage({ product }) {
    const {addProduct} = useContext(CartContext)
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
            <p>{product.description}</p>
            <PriceRow>
              <div>${product.price}</div>
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

    console.log(product);
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

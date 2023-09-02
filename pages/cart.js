import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;
const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;
export default function CartPage({ allProducts }) {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      const filteredCart = allProducts.filter((product) =>
        cartProducts.includes(product._id)
      );
      console.log(filteredCart);
      setProducts(filteredCart);
    }
  }, [cartProducts, allProducts]);
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your Cart is empty</div>}
            {cartProducts?.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td> {product.productName}: </td>
                      <td>
                        {cartProducts.filter((id) => id === product._id).length}
                      </td>
                      <td>Price</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order Information</h2>
              <input type="text" placeholder="Address"></input>
              <input type="text" placeholder="Address 2"></input>
              <Button $primary $block>
                Continue Payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    const allProducts = await response.json();
    // console.log(allProducts);
    return {
      props: {
        allProducts,
      },
    };
  } catch (error) {
    console.error("Failed fetching allProducts:", error);
    return {
      props: {
        allProducts: [], // Default empty array
      },
    };
  }
}

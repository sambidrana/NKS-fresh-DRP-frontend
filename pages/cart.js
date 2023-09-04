import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Table from "@/components/Table";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
const ProductInfoCell = styled.td`
  padding: 10px 0;
`;
const ProductImageBox = styled.div`
  width: 80x;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;
const QuantityLabel = styled.span`
  padding: 0 4px;
`;
const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;
export default function CartPage({ allProducts }) {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
//   console.log(cartProducts);
  const [products, setProducts] = useState([]);
  //For Pay Info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [territory, setTerritory] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      const filteredCart = allProducts.filter((product) =>
        cartProducts.includes(product._id)
      );
      console.log(filteredCart);
      setProducts(filteredCart);
    }
  }, [cartProducts, allProducts]);

  function addMoreProduct(id) {
    addProduct(id);
  }
  function reduceProduct(id) {
    removeProduct(id);
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      phone,
      email,
      address,
      city,
      postalCode,
      territory,
      products: cartProducts,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/checkout",
        formData
      );
      if (response.status === 200 && response.data && response.data.url) {
        window.location.href = response.data.url; // Redirect to Stripe checkout
      } else {
        console.log(
          "Order placed successfully, but failed to redirect to Stripe checkout."
        );
      }
    } catch (error) {
      console.error("There was an error placing the order:", error);
      // Handle the error appropriately.
    }
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.href.includes("success")
    ) {
      setIsSuccess(true);
      clearCart()

      
    } else {
        <h1>Loading...</h1>
    }
  }, []);

  if ( isSuccess ) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your Cart is empty</div>}
            {cartProducts?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img
                            src={product.images[0]}
                            alt={product.productName}
                          />
                        </ProductImageBox>
                        {product.productName}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => reduceProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => addMoreProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        AU$
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <strong>Total</strong>{" "}
                    </td>
                    <td></td>
                    <td>
                      <strong>AU${total}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order Information</h2>
              <form onSubmit={handleFormSubmit}>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input
                  type="number"
                  placeholder="Phone number"
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                ></Input>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <Input
                  type="text"
                  placeholder="Unit, Street Address"
                  value={address}
                  name="address"
                  onChange={(e) => setAdress(e.target.value)}
                ></Input>
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City/Suburb"
                    value={city}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  ></Input>
                  <Input
                    type="number"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(e) => setPostalCode(e.target.value)}
                  ></Input>
                </CityHolder>
                <Select
                  required
                  value={territory}
                  name={territory}
                  onChange={(e) => setTerritory(e.target.value)}
                >
                  <option value="" disabled>
                    Select a state
                  </option>
                  <option value="ACT">ACT</option>
                  <option value="NSW">NSW</option>
                  <option value="NT">NT</option>
                  <option value="QLD">QLD</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="VIC">VIC</option>
                  <option value="WA">WA</option>
                </Select>
                <input
                  type="hidden"
                  name="products"
                  value={cartProducts.join(",")}
                />
                <Button $primary $block type="submit">
                  Continue Payment
                </Button>
              </form>
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

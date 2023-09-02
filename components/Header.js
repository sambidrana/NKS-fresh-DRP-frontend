import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #222;
  box-shadow: 0 0 15px black;
  border-radius: 0 0 10px 10px;
  `;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;
const NavLinks = styled(Link)`
  color: #aaa;
  text-decoration: none;
  transition: all 0.3s ease;
  box-sizing: border-box;
  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;
export default function Header() {
  const {cartProducts} = useContext(CartContext)
  // console.log(cartProducts)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}> NKS Fresh </Logo>
          <StyledNav>
            {/* <NavLinks href={"/"}>Home</NavLinks> */}
            <NavLinks href={"/products"}>All Products</NavLinks>
            <NavLinks href={"categories"}>Categories</NavLinks>
            <NavLinks href={"/accont"}>Account</NavLinks>
            <NavLinks href={"/cart"}>Cart ({cartProducts.length})</NavLinks>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

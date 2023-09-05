import Link from "next/link";
import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import Center from "./Center";
import BarIcons from "./icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
  box-shadow: 0 0 15px black;
  border-radius: 0 0 10px 10px;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
${props => props.mobileNavActive ? `
  display: block;

` : `
  display: none;
`}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0;
  padding: 70px 20px 20px ;
  background-color: #222;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLinks = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  transition: all 0.3s ease;
  box-sizing: border-box;
  padding: 10px;
  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  // console.log(cartProducts)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}> NKS Fresh </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            {/* <NavLinks href={"/"}>Home</NavLinks> */}
            <NavLinks href={"/products"}>All Products</NavLinks>
            <NavLinks href={"categories"}>Categories</NavLinks>
            <NavLinks href={"/accont"}>Account</NavLinks>
            <NavLinks href={"/cart"}>Cart ({cartProducts.length})</NavLinks>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarIcons />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

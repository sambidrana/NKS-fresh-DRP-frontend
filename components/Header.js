import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #222;
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
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}> NKS Fresh </Logo>
          <StyledNav>
            <NavLinks href={"/"}>Home</NavLinks>
            <NavLinks href={"/products"}>All Products</NavLinks>
            <NavLinks href={"categories"}>Categories</NavLinks>
            <NavLinks href={"/accont"}>Account</NavLinks>
            <NavLinks href={"/cart"}>Cart (0)</NavLinks>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

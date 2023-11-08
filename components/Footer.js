import styled from "styled-components";

const StyledFooter = styled.div`
  /* background-color: #f0f0f0; */
  background-color: rgba(0, 0, 0, 0.15);
  padding: 10px;
  margin-top: 10px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;

  div:nth-child(1) {
    order: 2;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    padding: 20px;
    div:nth-child(1) {
      order: 0;
    }
  }
`;
const H3 = styled.h3`
  color: rgba(36, 30, 33, 0.8);
  font-size: 1.2rem;
`;
const LeftWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px 120px;
  margin-bottom: 10px;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    padding: 20px 150px;
  }
`;
const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;
const LeftBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    font-weight: 500;
  }
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
  p {
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    padding-left: 15px;
  }
`;
export default function Footer() {
  return (
    <StyledFooter>
      <LeftWrapper>
        <H3>Contact Us</H3>
        <LeftTop>
          <p>NKS Fresh</p>
          <p>662 Midland Highway</p>
          <p>Shepperton East</p>
          <p>VIC 3631</p>
        </LeftTop>
        <LeftBottom>
          <a href="mailto:nksfreshpack@gmail.com">nksfreshpack@gmail.com</a>
          <a href="tel:+61421185492">+61 421 185 492</a>
        </LeftBottom>
      </LeftWrapper>
      <RightWrapper>
        <H3>Why NKS Fresh?</H3>
        <p>Bringing the Best Australian Fruits to Your Table</p>
        <p>Passion for Fresh Fruit.</p>
      </RightWrapper>
    </StyledFooter>
  );
}

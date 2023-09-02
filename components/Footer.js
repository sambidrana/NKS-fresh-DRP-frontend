import styled from "styled-components";

const StyledFooter = styled.div`
  /* background-color: #f0f0f0; */
  background-color: rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-top: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;
const H3 = styled.h3`
  color: rgba(36, 30, 33, 0.8);
  font-size: 1.2rem;
`;
const LeftWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px 150px;
  border-radius: 15px;
`
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
`;
// const RightWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   p{
//     margin: 0;
//   }
// `;
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
      <div>
        <H3>Why NKS Fresh?</H3>
        <p>Bringing the Best Australian Fruits to Your Table</p>
        <p>Passion for Fresh Fruit.</p>
      </div>
    </StyledFooter>
  );
}

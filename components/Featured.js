import Center from "@/components/Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  height: 100%;
  padding: 50px 0;
`;
const HomeImg = styled.div`
  margin: 0 auto;
  max-width: calc(
    100% - 10px
  ); // Adjust for total 10px margin (5px on each side)
  margin: 5px;
  overflow: hidden; // In case the image overflows this container
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // This is the magic property
    max-height: 500px; // Prevent the image from being too tall
  }
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
  text-align: center;
`;
const Description = styled.p`
  color: #aaa;
  font-size: 1rem;
`;
const ColumnsWrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* gap: 30px; */
  /* img {
    max-width: 100%;
  } */
`;
const Column = styled.div`
  /* display: flex;
  align-items: center; */
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: end; // Vertically centers children in the flex container
  justify-content: center; // Horizontally centers children in the flex container
`;
export default function Featured() {
  return (
    <Bg>
      <Title>NKS Fresh </Title>
      <HomeImg>
        <img src="/images/home.jpeg" alt="temp pic" />
      </HomeImg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <Description>
              Our fruit shop was founded by two friends who share a love for
              fresh, tasty produce. We source our apples and plums from local
              farmers and suppliers, ensuring that our customers receive the
              freshest fruit available. Our commitment to quality and
              sustainability is reflected in everything we do, from the way we
              grow our fruit to the way we package and deliver it.
            </Description>
            <BtnWrapper>
              <ButtonLink href="/" $white $outline>
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </ButtonLink>
              <ButtonLink href="/products" $primary>
                Go to all products
              </ButtonLink>
            </BtnWrapper>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}

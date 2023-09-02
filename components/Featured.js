import Center from "@/components/Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
  /* background-color: #222; */
  color: #fff;
  height: 100%;
  padding: 50px 10px;
  margin-top: 0.5px;
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
    border-radius: 10px;
  }
`;
const Title = styled.h1`
  font-family: "Dancing Script", sans-serif;
  word-spacing: 4px;
  letter-spacing: 2px;
  color: black;
  /* text-shadow: 0 0 15px rgba(255, 255, 255, 0.9); */
  margin: 0;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 3rem;
  text-align: center;
  span {
    text-decoration: underline;
  }
`;
const Description = styled.p`
  color: #aaa;
  font-size: 1rem;
  padding: 10px 20px 5px 20px;
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
  function scrollFunction1(event) {
    event.preventDefault(); // This stops the default anchor behavior
    let e = document.getElementById("aboutSection");
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <Bg>
      <Title>
        NKS F<span>resh</span>{" "}
      </Title>
      <HomeImg>
        <img src="/images/home.jpeg" alt="temp pic" />
      </HomeImg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <Description>
              Your one-stop-shop for the freshest, most delicious apples and
              plums in Australia. Our fruit is hand-picked and delivered
              straight to your doorstep, so you can enjoy the taste of
              farm-fresh produce without ever leaving your home. Browse our
              selection of premium fruit today and taste the difference!
            </Description>
            <BtnWrapper>
              <ButtonLink href="#aboutSection" onClick={e => scrollFunction1(e)} $white $outline>
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

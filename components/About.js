import styled from "styled-components";

const Bg = styled.div`
  position: relative;
  padding: 10px;
  margin: 2px 1px 2px 1px;
  height: 800px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("/images/fruit-background.jpeg") no-repeat center center;
    background-size: cover;
    opacity: 0.5; /* Adjust this value for your desired opacity */
    z-index: -1;
  }
`;

const Container = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  grid-template-rows: 750px; /* Set the row height explicitly */
`;
const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // This ensures the items inside are spread out vertically
  align-items: center; // This will center the items horizontally
  height: 600px;
  overflow: hidden; // Hide any content that might overflow
  img {
    max-height: 500px; // Assuming h1 has a size around 1.5em, adjust if needed
    width: auto; // Preserve the aspect ratio of the image
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    margin-top: 80px;
  }
  h1 {
    font-family: "Dancing Script", sans-serif;
    color: rgba(36, 30, 33, 0.8);
    word-spacing: 3px;
    font-size: 2rem;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  }
`;
const RightWrap = styled.div`
  display: flex;
  align-items: end;
  p {
    color: rgba(36, 30, 33, 0.8);
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px;
    font-size: 1.1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    font-weight: 600;
  }
`;
export default function About() {
  return (
    <Bg id="aboutSection">
      <Container>
        <LeftWrap>
          <h1>Bringing the Best Australian Fruits to Your Table</h1>
          <img src="/images/display-apple.jpeg" alt="img.jpg" />
        </LeftWrap>
        <RightWrap>
          <p>
            At NKS Fresh, we are passionate about providing our customers with
            the freshest, most delicious fruit possible. Our family has been
            farming for generations, and we take pride in using only the most
            sustainable and environmentally-friendly farming practices to grow
            our fruit. We believe that everyone deserves access to high-quality,
            nutritious produce, and we're dedicated to making that a reality.
            When you choose NKS Fresh, you can feel confident that you are
            supporting a business that cares about both you and the planet.
          </p>
        </RightWrap>
      </Container>
    </Bg>
  );
}

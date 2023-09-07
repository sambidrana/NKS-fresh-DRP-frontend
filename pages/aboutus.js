import Center from "@/components/Center";
import DisplayAbout from "@/components/DisplayAbout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  h1 {
    font-family: "Dancing Script", sans-serif;
    font-size: 2.7rem;
    letter-spacing: 0.5px;
    margin: 0;
  }
  p {
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(255, 255, 255, 1);
    padding: 30px;
    border-radius: 10px;
  }
`;

const DisplaySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 25px 50px;
`;
const SectionAboutUs = styled.div`
  margin: 125px 250px;
  width
  height: 500px;
`;

export default function AboutUs() {
  return (
    <>
      <Header />
      <Center>
        <Heading>
          <h1>About Us</h1>
          <p>
            Our fruit shop was founded by two friends who share a love for
            fresh, tasty produce. We source our apples and plums from local
            farmers and suppliers, ensuring that our customers receive the
            freshest fruit available. Our commitment to quality and
            sustainability is reflected in everything we do, from the way we
            grow our fruit to the way we package and deliver it.
          </p>
        </Heading>
      </Center>

      <DisplaySection>
        <DisplayAbout>
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
            alt="Profile Pic"
          />
          <h3>Name</h3>
          <h4>Designation</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </DisplayAbout>
        <DisplayAbout>
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
            alt="Profile Pic"
          />
          <h3>Name</h3>
          <h4>Designation</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </DisplayAbout>
        <DisplayAbout>
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
            alt="Profile Pic"
          />
          <h3>Name</h3>
          <h4>Designation</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </DisplayAbout>
      </DisplaySection>
      <SectionAboutUs>
        <h1>Example</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </SectionAboutUs>
      <Footer />
    </>
  );
}

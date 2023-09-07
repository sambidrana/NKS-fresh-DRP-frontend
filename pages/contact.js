import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  margin: 100px 50px 10px 50px;
  gap: 20px;
`;
const LeftContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 1);
  padding: 15px;
  a {
    text-align: center;
  }
  img {
    max-width: 100%;
    background-color: #ccc;
    padding: 1px;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
  }
`;
const RightContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
`;

export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <LeftContainer>
          <h2>Contact Us</h2>
          <p>
            For enquiries on our products and services, please send us an email or use the enquiry form.
            We will get back to you within the next 24 hours. For urgent
            concerns, please call us.
          </p>
          <p>+61 421 185 492</p>
          <p>nksfreshpack@gmail.com</p>
          <p>662 Midland Highway Shepperton East VIC 3631</p>
          <a
            href="https://www.google.com/maps/place/662+Midland+Hwy/@-36.3973233,145.4627097,15.57z/data=!4m7!3m6!1s0x6ad8823df846ba15:0x1d15d5b9c801d570!4b1!8m2!3d-36.3995418!4d145.4691865!16s%2Fg%2F11c4lnby_f!5m1!1e4?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/location.png" />
          </a>
        </LeftContainer>
        <RightContainer>
          <EnquiryForm />
        </RightContainer>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

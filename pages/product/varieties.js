import Center from "@/components/Center";
import DisplayVarity from "@/components/DisplayVarity";
import Header from "@/components/Header";
import styled from "styled-components";
import { appleContent, peachContent, pearContent  } from "@/components/content/fruitDetails";
import Footer from "@/components/Footer";
import PageImgWrapper from "@/components/PageImgWrapper";



const ParaSection = styled.div`
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 15px white;

  h2 {
  }

  p {
  }
`;

const ImageSection = styled.div`
  padding: 60px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export default function FruitVarieties() {
  return (
    <>
      <Header />
      <PageImgWrapper>
        <h2>Our Fruits for Export</h2>
      </PageImgWrapper>
      <Center>
        <ParaSection>
          <h3>Example</h3>
          <p>
            NKS Fresh takes immense pride in providing top-tier Australian fruit
            for global markets. Our meticulous packing procedures involve
            rigorous quality checks, ensuring only the finest fruits make it to
            the consumers. Thanks to our advanced fruit traceability system, we
            can pinpoint the exact source of each fruit we package and
            distribute, guaranteeing that our clientele receives nothing but the
            best.
          </p>

          <p>
            Directly from our own farms in Australia, NKS Fresh offers an elite
            selection of stone fruits for international buyers.
          </p>

          <p>
            Our expertise lies in cultivating and exporting superior nectarines,
            peaches, plums, and apricots to a global clientele. Our
            comprehensive supply chain management, coupled with an unwavering
            commitment to quality assurance, ensures that we're always informed
            about the journey of every fruit piece that graces the market.
          </p>
        </ParaSection>
      </Center>
      <ImageSection>
        <DisplayVarity {...appleContent} ></DisplayVarity> 
        <DisplayVarity {...peachContent}></DisplayVarity> 
        <DisplayVarity {...pearContent}></DisplayVarity> 
        <DisplayVarity {...pearContent}></DisplayVarity> 
        <DisplayVarity {...appleContent} ></DisplayVarity> 
        <DisplayVarity {...peachContent}></DisplayVarity> 
      </ImageSection>
      <Footer />
    </>
  );
}

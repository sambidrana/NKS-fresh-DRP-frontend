import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: relative;
  padding: 10px;
  margin: 15px ;
  height: 300px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("/images/fruit-trees.jpg") no-repeat center center;
    background-size: cover;
    opacity: 0.7; /* Adjust this value for your desired opacity */
    z-index: -1;
  }
`;

const ParaSection = styled.div`
  padding: 20px 40px;
  background: rgba(255,255,255, 0.7);
  box-shadow: 0 0 15px white;

  h2{

  }

  p{
    
  }
  
`;
export default function FruitVarieties() {
  return (
    <>
      <Header />
      <HeaderWrapper>
        <h2>Our Fruits for Export</h2>
      </HeaderWrapper>
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
    </>
  );
}

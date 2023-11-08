import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PackagingOptions from "@/components/PackagingOptions";
import PageImgWrapper from "@/components/PageImgWrapper";
import styled from "styled-components";

const OptionsWrapper = styled.div`
  padding: 60px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default function Packaging() {
  return (
    <>
      <Header />
      <PageImgWrapper
        bgImg={
          "https://rotom.co.uk/media/mageplaza/blog/post/import/blog/uk/2021/05/keep-your-fruit-and-vegetables-fresh-with-the-proper-logistics-packaging/keep-your-fruit-and-vegetables-fresh-with-the-proper-logistics-packaging-2.jpg"
        }
      >
        <h2>Packaging Options</h2>
      </PageImgWrapper>
      <Center>
        <div>
          <h2>Premium Packaging Option</h2>
          <p>
            At NKS Fresh, we provide an array of stonefruit packaging solutions
            tailored to meet consumer preferences. Our fruit is meticulously
            packaged at our cutting-edge in-house packing facility, equipped
            with three carton packaging and two pre-packaging lines.
          </p>
        </div>
      </Center>
      <div>
        <OptionsWrapper>
          <PackagingOptions name="Premium Trays" image="/images/packagingImages/example1.jpeg" />
          <PackagingOptions name="Export Cartons" image="/images/packagingImages/example2.jpeg" />
          <PackagingOptions name="Prepacked Punnets" image="/images/packagingImages/example4.jpeg" />
        </OptionsWrapper>
      </div>
      <Footer />
    </>
  );
}

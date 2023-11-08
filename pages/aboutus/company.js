import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageImgWrapper from "@/components/PageImgWrapper";
import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin: 50px 40px;
  gap: 50px;
  align-items: center;
  h2 {
    padding: 10px;
    font-weight: 600;
  }
  img {
    max-width: 100%;
    padding: 10px;
    border-radius: 20px;
  }
  p {
    color: gray;
  }
`;

export default function Company() {
  return (
    <>
      <Header />
      <PageImgWrapper bgImg={"/images/home.jpeg"}>
        <h2>Our Company</h2>
      </PageImgWrapper>
      <Section>
        <div>
          <h2>Export Specialists</h2>
          <img src="/images/company/example1.jpeg" />
        </div>
        <div>
          <p>
            Our dedicated export division is led by Colleen Dangerfield, a
            seasoned expert with more than a quarter-century of experience in
            steering Australian fruit exports. At NKS Fresh, our primary
            objective is to consistently deliver top-tier products to
            international markets, reinforcing our brand prominence and
            fostering enduring relationships.
          </p>
          <p>
            We cater to all markets equipped with established protocols. Our
            primary destinations comprise China, Hong Kong, the United Arab
            Emirates, Singapore, Canada, among others. Explore our trading
            routes for more information.
          </p>
        </div>
      </Section>

      <Section>
        <div>
          <h2>Export Quality Fruit</h2>
          <p>
            Cultivated under impeccable conditions, our Australian nectarines,
            peaches, plums, and apricots are in high demand in global markets.
            Additionally, we procure mangoes, cherries, grapes, oranges,
            mandarins, pears, and melons from top-tier Australian producers for
            export. We ensure our elite Australian fruits are provided at their
            peak seasonal freshness, living up to the discerning expectations of
            our global consumers.
          </p>
        </div>
        <div>
          <img src="/images/company/example2.jpeg" />
        </div>
      </Section>

      <Section>
        <div>
          <h2>Export Specialists</h2>
          <img src="/images/company/example4.jpeg" />
        </div>
        <div>
          <p>
            Spanning across 750 hectares in north-western Victoria, Australia,
            our agricultural lands are home to an array of peaches, plums,
            apricots, nectarines, and grapes. We've instituted rigorous quality
            checks to guarantee the utmost fruit quality. Our stonefruit packing
            units, strategically situated adjacent to our fields, ensure rapid
            processing from harvest to distribution for our global clientele.
            Overseeing the entire journey from cultivation to global shipping,
            we are steadfast in upholding the highest quality benchmarks.
          </p>
        </div>
      </Section>
      <Footer />
    </>
  );
}

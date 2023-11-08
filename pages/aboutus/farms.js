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
  div {
  }
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
    background-color: rgba(255, 255, 255, 0.3);
    padding: 30px;
    box-shadow: 5px 5px 5px rgba(255, 255, 255, 1);
    border-radius: 20px;

  }
`;

export default function Company() {
  return (
    <>
      <Header />
      <PageImgWrapper bgImg={"/images/home.jpeg"}>
        <h2>Farms and Packing Facilities</h2>
      </PageImgWrapper>
      <Center>
        <div>
          <h2>Australian Stonefruit Farms</h2>
          <p>
            Nestled across 750 hectares in north-western Victoria, our lush
            orchards produce top-tier stonefruit in one of Australia's prime
            stonefruit cultivating regions. This region's distinct blend of
            intense winter chill paired with abundant sunshine throughout the
            year yields stonefruit that is both succulent and rich in flavor.
          </p>
          <p>
            Situated in the renowned Murray Basin food bowl, our estates are
            part of an expanse recognized for its massive production of fresh
            stonefruit, pistachios, and table grapes in Australia. The region's
            nutrient-rich soil, coupled with its congenial climate, allows us to
            harvest produce that stands out for its premium quality, impeccable
            health, and delightful taste.
          </p>
        </div>
      </Center>
      <Section>
        <div>
          <h2>Hand Picked Fruit</h2>
          <img src="/images/company/example5.jpeg" />
        </div>
        <div>
          <p>
            Our farm's stonefruit is meticulously hand-harvested by dedicated
            orchard staff to minimize any potential harm. Every season, a
            workforce of nearly 150 individuals ensures that every fruit type is
            picked at its optimum ripeness. Varieties like nectarines, peaches,
            plums, and apricots are selectively hand-collected from our orchards
            and promptly transported to our adjacent packing facility. By
            strategically investing in state-of-the-art packing amenities right
            beside our orchards and overseeing the logistics, we ensure our
            stonefruit reaches the market promptly. This streamlined process
            ensures that the freshness and authentic flavor of our produce
            remains intact for our global clientele.
          </p>
        </div>
      </Section>

      <Section>
        <div>
          <h2>Premium Packing Facility</h2>
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
          <img src="/images/company/example6.avif" />
        </div>
      </Section>

      <Footer />
    </>
  );
}

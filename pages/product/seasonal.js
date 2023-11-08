import Button from "@/components/Button";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageImgWrapper from "@/components/PageImgWrapper";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;
export default function Seasonal() {
  return (
    <>
      <Header />
      <PageImgWrapper bgImg="https://c1.wallpaperflare.com/preview/879/952/47/apple-harvest-autumn-nature.jpg">
        <h2>Seasonal Availability</h2>
      </PageImgWrapper>
      <Center>
        <div>
          <h2>Seasonal Availability</h2>

          <p>
            NKS Fresh manages availability throughout the growing season to
            fulfill customer needs. We cultivate a blend of early, mid, and
            late-season fruit tree varieties on our lands and collaborate with
            partner growers. Strategically planting our orchards, we ensure a
            consistent supply of stonefruit to international markets during peak
            periods, like the renowned Harvest Festival.
          </p>
          <p>
            The Australian stonefruit season kicks off in November with
            nectarines and wraps up with the late variety plums in April. By
            fostering partnerships with distinguished growers, NKS Fresh exports
            Australian produce including summer delights like cherries, grapes,
            and mangoes, winter specialties such as citrus and pears, and
            all-year-round favorites like melons to global destinations.
          </p>
          <ButtonWrapper>
            <Button
              $primary
              $block
              as="a"
              href="/images/display-apple.jpeg"
              download
            >
              Download seasonal availability chart
            </Button>
          </ButtonWrapper>
        </div>
        <div>
          <h2>Why buy in season?</h2>
          <p>
            Purchasing in-season fruits and vegetables is a choice that benefits
            both your health and the environment. When produce is in season,
            it's at its nutritional peak, offering richer flavors and optimal
            health benefits. Moreover, in-season crops are typically harvested
            locally, reducing the carbon footprint associated with
            transportation and storage. This not only ensures you're getting the
            freshest possible produce but also supports local farmers and
            economies. Additionally, in-season fruits and vegetables are often
            more affordable due to the abundance of the crop. So, by choosing
            in-season, you're making a decision that's better for your health,
            wallet, community, and the planet.
          </p>
        </div>
      </Center>
      <Footer />
    </>
  );
}

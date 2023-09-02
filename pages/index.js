import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecentProductsLayout from "@/components/RecentProductsLayout";

export default function HomePage({ latestProducts }) {
  return (
    <div>
      <Header />
      <Featured />
      <About />
      <RecentProductsLayout latestProducts={latestProducts} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "http://localhost:3000/api/products?recent=true"
    );
    let latestProducts = await response.json();

    latestProducts = latestProducts.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
    latestProducts = latestProducts.slice(0, 3);
    console.log(latestProducts)

    console.log(latestProducts);
    return {
      props: {
        latestProducts,
      },
    };
  } catch (error) {
    console.error("Failed fetching latestProducts:", error);
    return {
      props: {
        latestProducts: [], // Default empty array
      },
    };
  }
}

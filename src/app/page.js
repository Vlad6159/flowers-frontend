import ListProductCards from "@/components/ListProductCards/ListProductCards";
import H1 from "@/components/H1/H1";
import { backendUrl } from "@/const/const";

const Page = async () => {
  const fetchProducts = await fetch(backendUrl + "/products");
  const { products } = await fetchProducts.json();
  return (
    <>
      <H1>Каталог</H1>
      <ListProductCards products={products} />
    </>
  );
};

export default Page;

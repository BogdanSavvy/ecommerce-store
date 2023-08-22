import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeature: true });
  const billboard = await getBillboard("98ca9017-4aca-46bd-9027-2ffe7d8d0cf7");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Feature Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

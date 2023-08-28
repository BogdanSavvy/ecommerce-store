import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeature: true });
  //? get billboard by billdoardID
  const billboard = await getBillboard("8a59d1ad-0802-43e5-b655-29cf65a24743");

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

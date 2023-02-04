import type { GetServerSideProps, NextPage } from "next";

import { ProductsCardTall } from "../components";
import { ProductService } from "../services";
import { HomePageProps } from "../types/pages/props";

const Home: NextPage<HomePageProps> = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products?.map((product) => (
            <ProductsCardTall
              id={product.id}
              name={product.name}
              price={product.price}
              smallDescription={"Small description"}
              imageSrc={product.image[0]}
              imageAlt={product.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await ProductService.getProducts();
  const products = res.data.data;

  return { props: { products } };
};

export default Home;

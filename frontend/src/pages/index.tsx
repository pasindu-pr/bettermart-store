import type { GetServerSideProps, NextPage } from "next";

import {
  ProductCard,
  ProductsCardTall,
  ShoppingCartProductList,
} from "../components";
import { products } from "../data";
import { PageLayout } from "../layouts";
import { ProductService } from "../services";
import { HomePageProps } from "../types/pages/props";

const Home: NextPage<HomePageProps> = ({ products }) => {
  return (
    <PageLayout>
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
      {/* Treding Products */}

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Trending products
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {/* {products.map((product) => (
              <ProductCard
                id="sdsd"
                name={product.name}
                price={product.price}
                smallDescription={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
              />
            ))} */}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Shop the collection<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {/* {products.map((product) => (
              <ProductsCardTall
                id={"random"}
                name={product.name}
                price={product.price}
                smallDescription={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
              />
            ))} */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await ProductService.getProducts();
  const products = res.data.data;

  return { props: { products } };
};

export default Home;

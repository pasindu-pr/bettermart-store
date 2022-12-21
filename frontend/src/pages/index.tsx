import type { NextPage } from "next";

import { ProductCard, ProductsCardTall } from "../components";
import { PageLayout } from "../layouts";

const products = [
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    price: "$13",
    description: "3 sizes available",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Focus Card Holder",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
];

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <ProductsCardTall
                id={"random"}
                name={product.name}
                price={product.price}
                smallDescription={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
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
            {products.map((product) => (
              <ProductCard
                id="sdsd"
                name={product.name}
                price={product.price}
                smallDescription={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
              />
            ))}
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
            {products.map((product) => (
              <ProductsCardTall
                id={"random"}
                name={product.name}
                price={product.price}
                smallDescription={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;

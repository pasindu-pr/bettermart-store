import { useContext } from "react";
import { Tab } from "@headlessui/react";
import { GetServerSideProps, NextPage } from "next";
import { ProductService } from "../../../services";
import { ProductDetailPageProps } from "../../../types/pages/props";
import { uuid } from "../../../libs";
import { Button, Input } from "../../../components";
import { CartItem } from "../../../types/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { CartContext } from "../../../context/cart-context";

const ProductDetailsPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  const { addItems } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CartItem>();

  const onSubmit: SubmitHandler<CartItem> = (data) => {
    const item: CartItem = {
      ...data,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image[0],
    };

    addItems(item);
  };

  return (
    <div className="bg-white">
      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <Tab.Group as="div" className="flex flex-col-reverse">
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none"></div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {product.image.map((image) => (
                  <Tab.Panel key={uuid()}>
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">{product.price} $</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-10 flex sm:flex-col1">
                  <div className="flex flex-col gap-2">
                    <Input
                      type="number"
                      additionalStyles="rounded"
                      min="0"
                      max={product.stockCount}
                      {...register("quantity")}
                      placeholder="Quantity"
                    />

                    <Button title="Add to cart" type="submit" size="small" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await ProductService.getProduct(context.params?.id as string);
  const product = res.data.data;

  return { props: { product } };
};

export default ProductDetailsPage;

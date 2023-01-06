import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, ImageUploadInput, Input } from "../../../components";
import { AdminLayout } from "../../../layouts";
import { AddProductInputs } from "../../../types";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductInputs>();

  const onSubmit: SubmitHandler<AddProductInputs> = (data) => {};

  return (
    <>
      <AdminLayout>
        <div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-4">
                      <Input
                        label="Name"
                        type="text"
                        additionalStyles="rounded"
                        {...register("name")}
                      />
                    </div>

                    <div className="col-span-4">
                      <Input
                        label="Price"
                        type="number"
                        additionalStyles="rounded"
                        {...register("price")}
                      />
                    </div>

                    <div className="col-span-4">
                      <Input
                        label="Quantity"
                        type="number"
                        additionalStyles="rounded"
                        {...register("quantity")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                        defaultValue={""}
                        {...register("description")}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description about the product.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <ImageUploadInput label="Image 1" />
                    <ImageUploadInput label="Image 2" />
                    <ImageUploadInput label="Image 3" />
                    <ImageUploadInput label="Image 4" />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <Button title="Save" onClick={() => {}} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Create;

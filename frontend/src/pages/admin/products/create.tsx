import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, ImageUploadInput, Input } from "../../../components";
import { AdminLayout } from "../../../layouts";
import { UploadService } from "../../../services";
import { AddProductInputs } from "../../../types";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductInputs>();
  const [imageSources, setImageSources] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const onSubmit: SubmitHandler<AddProductInputs> = (data) => {
    const product = {
      ...data,
      images: imageSources,
    };
  };

  const [imageOneUploadProgress, setImageOneUploadProgress] =
    useState<number>(0);
  const [imageTwouploadProgress, setImageTwoUploadProgress] =
    useState<number>(0);
  const [imageThreeuploadProgress, setImageThreeUploadProgress] =
    useState<number>(0);
  const [imageTFourploadProgress, setImageFourUploadProgress] =
    useState<number>(0);

  const handleImageOneSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = (e.target as HTMLInputElement)?.files?.[0];
    uploadImage(file, setImageOneUploadProgress).then((res) => {
      setImageSources((prevState) => ({
        ...prevState,
        image1: res.data.secure_url,
      }));
    });
  };

  const handleImageTwoSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = (e.target as HTMLInputElement)?.files?.[0];
    uploadImage(file, setImageTwoUploadProgress).then((res) => {
      setImageSources((prevState) => ({
        ...prevState,
        image2: res.data.secure_url,
      }));
    });
  };

  const handleImageThreeSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = (e.target as HTMLInputElement)?.files?.[0];
    uploadImage(file, setImageThreeUploadProgress).then((res) => {
      setImageSources((prevState) => ({
        ...prevState,
        image3: res.data.secure_url,
      }));
    });
  };

  const handleImageFourSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = (e.target as HTMLInputElement)?.files?.[0];
    uploadImage(file, setImageThreeUploadProgress).then((res) => {
      setImageSources((prevState) => ({
        ...prevState,
        image4: res.data.secure_url,
      }));
    });
  };

  const uploadImage = (
    file: any,
    setProgress: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return UploadService.uploadImage(file, setProgress).then((res) => {
      return res;
    });
  };

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
                    <ImageUploadInput
                      label="Image 1"
                      uploadProgress={imageOneUploadProgress}
                      onChange={handleImageOneSelect}
                    />
                    <ImageUploadInput
                      label="Image 2"
                      uploadProgress={imageTwouploadProgress}
                      onChange={handleImageTwoSelect}
                    />
                    <ImageUploadInput
                      label="Image 3"
                      uploadProgress={imageThreeuploadProgress}
                      onChange={handleImageThreeSelect}
                    />
                    <ImageUploadInput
                      label="Image 4"
                      uploadProgress={imageTFourploadProgress}
                      onChange={handleImageFourSelect}
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <Button title="Save" type="submit" />
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

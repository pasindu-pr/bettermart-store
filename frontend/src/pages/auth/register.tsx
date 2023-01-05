import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

import { Button, Error, H2, Image, Input } from "../../components";
import { AuthService } from "../../services";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { RegisterInputs } from "../../types/auth/inputs";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    AuthService.registerWithEmail(data.fullName, data.email, data.password)
      .then(() => {
        toast.success("You account has been created successfully");
        redirectToHome();
      })
      .catch(() => {
        toast.error("There was an error while registering");
      });
  };

  const redirectToHome = () => {
    router.push("/ ");
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="w-full flex justify-center">
              <div className="relative w-12 h-12">
                <Image
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Bettermart Logo"
                />
              </div>
            </div>

            <H2 text="Create your account" />
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                type="email"
                placeholder="Email"
                additionalStyles="rounded-t"
                {...register("email", { required: "Email is required" })}
              />

              <Input
                type="text"
                placeholder="Name"
                additionalStyles="rounded-0"
                {...register("fullName", { required: "Full name is required" })}
              />

              <Input
                type="password"
                placeholder="Password"
                additionalStyles="rounded-b"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 characters long",
                  },
                })}
              />
            </div>

            <div className="mt-2">
              {errors.fullName && (
                <Error message={errors.fullName.message as string} />
              )}
              {errors.email && (
                <Error message={errors.email.message as string} />
              )}
              {errors.password && (
                <Error message={errors.password.message as string} />
              )}
            </div>

            <Button title="Login" size="small" type="submit" />

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/auth/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account? Login from here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

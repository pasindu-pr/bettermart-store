import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, H2, Input, Image, Error } from "../../components";
import { AuthService } from "../../services";
import { LoginInputs } from "../../types/auth/inputs";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const handleGoogleLogin = () => {
    AuthService.loginWithGoogle()
      .then(() => {
        toast.success("You are logged in");
        redirectToHome();
      })
      .catch(() => {
        toast.error("There was an error while login");
      });
  };

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    AuthService.loginWithEmail(data.email, data.password)
      .then(() => {
        toast.success("You account has been created successfully");
        redirectToHome();
      })
      .catch(() => {
        toast.error("There was an error while registering");
      });
  };

  const redirectToHome = () => {
    if (router.query.redirect) {
      router.push(router.query.redirect as string);
    } else {
      router.push("/");
    }
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

            <H2 text="Sign in to your account" />
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email"
                additionalStyles="rounded-t"
              />

              <Input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                additionalStyles="rounded-b"
              />
            </div>

            <div className="mt-2">
              {errors.email && (
                <Error message={errors.email.message as string} />
              )}

              {errors.password && (
                <Error message={errors.password.message as string} />
              )}
            </div>

            <Button title="Login" size="small" />

            <div className="flex w-full justify-center gap-4">
              <div
                onClick={handleGoogleLogin}
                className="flex items-center shadow-md px-2 cursor-pointer border-2 border-indigo-50 gap-3 rounded-3xl py-2"
              >
                <img src="/images/social/google.svg" className="w-6" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

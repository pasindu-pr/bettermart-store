import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { Button, H2, Input, Image } from "../../components";
import { AuthService } from "../../services";

export default function Login() {
  const router = useRouter();

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

  const redirectToHome = () => {
    router.push("/");
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
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                name="email"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                type="email"
                placeholder="Email"
                additionalStyles="rounded-t"
              />

              <Input
                name="password"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                type="password"
                placeholder="Password"
                additionalStyles="rounded-b"
              />
            </div>

            <Button
              title="Login"
              onClick={(e) => {
                console.log(e);
              }}
              size="small"
            />

            <div className="flex w-full justify-center gap-4">
              <div
                onClick={handleGoogleLogin}
                className="flex items-center shadow-md px-2 cursor-pointer border-2 border-indigo-50 gap-3 rounded-3xl py-2"
              >
                <img src="/images/social/google.svg" className="w-6" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

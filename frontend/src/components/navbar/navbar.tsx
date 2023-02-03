import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { AuthContext } from "../../context";
import { AuthService } from "../../services";
import toast from "react-hot-toast";
import { CartContext } from "../../context/cart-context";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { user } = useContext(AuthContext);
  const { items } = useContext(CartContext);

  const signOut = () => {
    AuthService.signOut()
      .then(() => {
        toast.success("Signed out!");
      })
      .catch(() => {
        toast.error("There was an error while sign out");
      });
  };

  return (
    <div className="bg-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {!user ? (
                  <>
                    <div
                      className="flow-root"
                      onClick={() => router.push("/auth/login")}
                    >
                      Create an account
                    </div>
                    <div
                      className="flow-root"
                      onClick={() => router.push("/auth/login")}
                    >
                      Sign in
                    </div>
                  </>
                ) : (
                  <div className="flow-root" onClick={signOut}>
                    Sign out
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Get free delivery on orders over $100
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {!user ? (
                  <>
                    <p
                      className="cursor-pointer text-sm font-medium text-white hover:text-gray-100"
                      onClick={() => router.push("/auth/register")}
                    >
                      Create an account
                    </p>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                    <p
                      className="cursor-pointer text-sm font-medium text-white hover:text-gray-100"
                      onClick={() => router.push("/auth/login")}
                    >
                      Sign in
                    </p>
                  </>
                ) : (
                  <p
                    onClick={signOut}
                    className="cursor-pointer text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign out
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  <div className="hidden lg:flex lg:items-center">
                    <Link href="/">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto"
                        src="/logo/bettermart-logo.png"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img
                      src="/logo/bettermart-logo.png"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex-1 flex items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="flex">
                          <a
                            href="#"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Account</span>
                          </a>
                        </div>
                      </div>

                      <span
                        className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                        aria-hidden="true"
                      />

                      <div className="flow-root">
                        <p
                          onClick={() => router.push("/products/shopping-cart")}
                          className="group -m-2 p-2 flex items-center cursor-pointer"
                        >
                          <ShoppingCartIcon
                            className="flex-shrink-0 h-6 w-6 text-[#5263f3] text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {items?.length}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

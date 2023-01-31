import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Inter } from "@next/font/google";

import NavBar from "../components/navbar/navbar";
import { AuthProvider } from "../context";
import { useRouter } from "next/router";
import { CartProvider } from "../context/cart-context";

const inter = Inter({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <main className={`${inter.variable} font-sans`}>
            {!router.pathname.startsWith("/admin") && <NavBar />}
            <Component {...pageProps} />
            <Toaster />
          </main>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;

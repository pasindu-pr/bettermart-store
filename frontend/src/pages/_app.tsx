import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Inter } from "@next/font/google";

import NavBar from "../components/navbar/navbar";
import { AuthProvider } from "../context";
import { useRouter } from "next/router";
import { CartProvider } from "../context/cart-context";
import { PageLayout } from "../layouts";

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
          <PageLayout>
            <main className={`${inter.variable} font-sans`}>
              {!router.pathname.startsWith("/admin") && <NavBar />}
              <Component {...pageProps} />
              <Toaster />
            </main>
          </PageLayout>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;

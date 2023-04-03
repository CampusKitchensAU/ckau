import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full pt-[72px]">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);

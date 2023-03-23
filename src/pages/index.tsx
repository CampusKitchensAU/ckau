import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>CKAU | Home</title>
        <meta
          name="description"
          content="Home page for The Campus Kitchen at Auburn University"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-primary-100">
        <div className="relative isolate w-full overflow-hidden bg-gray-900">
          <Image
            src="/images/OldExecHero.jpg"
            alt=""
            fill
            className=" -z-10 object-cover brightness-50 contrast-75"
          />
          <div className="mx-auto bg-gradient-to-t from-[rgb(3,36,77,0.2)] to-[rgb(3,36,77,0.1)] px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Announcing our next round of funding.{" "}
                  <a href="#" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  The Campus Kitchen at Auburn University
                </h1>
                <p className="mt-6 text-lg font-semibold leading-8 text-gray-300">
                  &quot;Fighting food waste and hunger in the East Central
                  Alabama community.&quot;
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="https://alumniq.auburn.edu/giving/to/campuskitchens"
                    target="_blank"
                    rel="noopener"
                    className="rounded-md lg:min-w-[256px] bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400"
                  >
                    Dontate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

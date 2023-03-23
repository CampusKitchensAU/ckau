import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh_-_72px)] grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid lg:grid-cols-[max(50%,36rem),1fr]">
      <div className="relative isolate min-h-[calc(100vh_-_72px)] w-full overflow-hidden lg:row-start-2 lg:min-h-0 lg:bg-white lg:pl-8 xl:pl-16">
        <Image
          src="/images/Elise-Dinosaur.jpg"
          alt=""
          fill
          className=" -z-10 object-cover brightness-50 contrast-75 lg:hidden"
        />
        <div className="mx-auto min-h-[calc(100vh_-_72px)] max-w-7xl bg-gradient-to-t from-[rgb(3,36,77,0.3)]  to-[rgb(3,36,77,0.1)] px-6 lg:min-h-0 lg:bg-none lg:px-8">
          <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
            <Link href="/">
              <span className="sr-only">
                The Campus Kitchen at Auburn University
              </span>
              <Image
                className="hidden h-10 w-auto sm:h-12 lg:block"
                src="/logos/ckau-logo-rect-nobg.png"
                alt="The Campus Kitchen at Auburn University Logo"
                width={200}
                height={100}
              />
              <Image
                className="h-10 w-auto sm:h-12 lg:hidden"
                src="/logos/ckau-logo-rect-nobg-white.png"
                alt="The Campus Kitchen at Auburn University Logo"
                width={200}
                height={100}
              />
            </Link>
          </header>
          <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div className="max-w-lg">
              <p className="text-base font-semibold leading-8 text-white lg:text-secondary">
                404
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-gray-900">
                Page not found
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-300 lg:text-gray-600">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  className="text-sm font-semibold leading-7 text-white lg:text-secondary"
                >
                  <span aria-hidden="true">&larr;</span> Back to home
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
        <img
          src="/images/Elise-Dinosaur.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {/* <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
        <a href="/">
          <span className="sr-only">
            The Campus Kitchen at Auburn University
          </span>
          <img
            className="h-10 w-auto sm:h-12"
            src="/logos/ckau-logo-rect-nobg.png"
            alt="The Campus Kitchen at Auburn University Logo"
          />
        </a>
      </header>
      <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
        <div className="max-w-lg">
          <p className="text-base font-semibold leading-8 text-secondary">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="text-sm font-semibold leading-7 text-secondary"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </div>
      </main>
      <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
        <img
          src="/images/Elise-Dinosaur.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div> */}
    </div>
  );
};

export default Custom404;

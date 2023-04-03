import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaBox, FaHandsHelping, FaTruck } from "react-icons/fa";

const HowItWorks: NextPage = () => {
  return (
    <>
      <Head>
        <title>CKAU | How It Works</title>
        <meta
          name="description"
          content="How it works page for The Campus Kitchen at Auburn University"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-slate-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-secondary">
                  Operations
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Safe food for all
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  We are committed to maintaining safe and efficient operations
                  as we work towards our mission of fighting food waste and
                  hunger in our community. Our logistics are continuously
                  adapted and improved to ensure that we can donate safe,
                  unserved food to those in need.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/PackageFeature.jpg"
              alt=""
              width={1920}
              height={1280}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Thanks to the Bill Emerson Good Samaritan Food Donation Act of
                  1996, we can accept donations of commercially-prepared food
                  without liability concerns. To ensure that our operations meet
                  the highest safety standards, we have at least one executive
                  team member who is ServSafe certified at the managerial level
                  each year.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <FaHandsHelping
                      className="mt-1 h-5 w-5 flex-none text-secondary"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Pick-up.
                      </strong>{" "}
                      Every day, our volunteers collect and transport food from
                      on-campus dining halls to our kitchen, where it is sorted,
                      packaged, and distributed to those in need.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaBox
                      className="mt-1 h-5 w-5 flex-none text-secondary"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Package.
                      </strong>{" "}
                      Packaging is a crucial part of our food rescue operations,
                      ensuring that the food we distribute is safe and of high
                      quality. Our volunteers work diligently to carefully
                      package the recovered food, adhering to food safety
                      guidelines and best practices.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaTruck
                      className="mt-1 h-5 w-5 flex-none text-secondary"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Deliver.
                      </strong>{" "}
                      We transport the packaged food to various community
                      partners, ensuring that those who need it most have access
                      to safe, nutritious meals.
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Clean space, healthy volunteers, better service.
                </h2>
                <p className="mt-6">
                  We take pride in maintaining a clean and organized workspace
                  at our headquarters in Lupton Hall. Our volunteers regularly
                  participate in cleaning activities to ensure that our
                  facilities are safe and welcoming to everyone. By keeping our
                  workspace clean, we create a healthy environment for our
                  volunteers to work in, and we also ensure that we meet hygiene
                  and food safety standards. We are committed to maintaining a
                  high level of cleanliness at all times, so we can continue to
                  provide the best possible service to our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

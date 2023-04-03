import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import partners from "~/data/partners";

const featuredPartners = [
  {
    name: "Auburn University Dining Services",
    logo: "/partners/tiger-dining.jpg",
  },
  {
    name: "Auburn University Campus Food Pantry",
    logo: "/partners/campus-food-pantry.png",
  },
  {
    name: "Starbucks Coffee",
    logo: "/partners/starbucks.svg",
  },
  {
    name: "Esperanza House",
    logo: "/partners/esperanza-house.png",
  },
  {
    name: "Panera Bread",
    logo: "/partners/panera.png",
  },
  {
    name: "Meals on Wheels",
    logo: "/partners/mow.png",
  },
];

const Partners: NextPage = () => {
  const partnersRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>CKAU | Partners</title>
        <meta
          name="description"
          content="Partners page for The Campus Kitchen at Auburn University"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-[calc(100vh_-_72px)] bg-white pt-8 pb-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our partners are the heart of our mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are grateful for their collaboration, which provides valuable
                opportunities for our volunteers to engage with and learn from
                diverse individuals in the community, and to make a positive
                impact beyond our own organization. Together, we are working
                towards a future where everyone has access to nutritious food,
                and we could not do it without the support and dedication of our
                partners.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <div
                  onClick={() => {
                    if (partnersRef.current)
                      window.scrollTo({
                        top:
                          partnersRef.current.getBoundingClientRect().top - 72,
                        behavior: "smooth",
                      });
                  }}
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Learn more
                </div>
                <Link
                  href="mailto:theckau@gmail.com"
                  className="text-sm font-semibold text-gray-900"
                >
                  Contact us <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              {featuredPartners.map((partner) => (
                <Image
                  key={partner.name}
                  className="max-h-20 w-full object-contain"
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={partnersRef} className="relative isolate pt-8 pb-20">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-primary-100 [mask-image:radial-gradient(208rem_208rem_at_top,white,transparent)] sm:[mask-image:radial-gradient(96rem_96rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
              width={40}
              height={40}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path
                id="Combined-Shape"
                d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z"
                fill="none"
                className="fill-primary-100 opacity-20"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          />
        </svg>
        <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 lg:max-w-7xl lg:px-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {partner.name}
              </h3>
              <p className="text-lg leading-8 text-gray-600">
                {partner.description}
              </p>
              {partner.href && (
                <Link
                  href={partner.href}
                  className="text-sm font-semibold text-secondary"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Partners;

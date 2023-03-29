import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import execTeam from "~/data/execTeam";
import leadershipTeam from "~/data/leadershipTeam";

const Team: NextPage = () => {
  const listChunks: string[][] = [];

  for (let i = 0; i < leadershipTeam.length; i += 10) {
    listChunks.push(leadershipTeam.slice(i, i + 10));
  }

  return (
    <>
      <Head>
        <title>CKAU | Team</title>
        <meta
          name="description"
          content="Team page for The Campus Kitchen at Auburn University"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white py-24 md:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re a dynamic group of individuals who are passionate about
              fighting food insecurity with dedication to serving the Auburn
              family and our surrounding communities.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2 xl:grid-cols-3"
          >
            {execTeam.map((person) => (
              <li key={person.name}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt={"Headshot photo of " + person.name}
                  width={600}
                  height={400}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.title}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  {person.linkedinUrl && (
                    <li>
                      <Link
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin className="h-5 w-5" />
                      </Link>
                    </li>
                  )}
                  {person.twitterUrl && (
                    <li>
                      <Link
                        href={person.twitterUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <FaTwitter />
                      </Link>
                    </li>
                  )}
                  {person.instagramUrl && (
                    <li>
                      <Link
                        href={person.instagramUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="h-5 w-5" />
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-14 w-full bg-primary-700 pb-20 sm:pb-24 xl:pb-0">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            viewBox="0 0 1097 1023"
            aria-hidden="true"
            className="absolute top-[calc(50%-36rem)] left-[calc(50%-19rem)] w-[68.5625rem] transform-gpu blur-3xl"
          >
            <path
              fill="url(#a)"
              fillOpacity=".25"
              d="M301.174 782.617 193.541 1022.43 0 661.021l301.174 121.596 193.845-431.895c1.241 199.565 42.802 522.762 199.124 219.035 195.402-379.66 143.295-711.863 284.729-507.43 113.148 163.545 124.068 445.37 115.378 565.839L811.753 450.894l20.102 545.98-530.681-214.257Z"
            />
            <defs>
              <linearGradient
                id="a"
                x1="1097.04"
                x2="-173.036"
                y1=".267"
                y2="307.794"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DD550C" />
                <stop offset={1} stopColor="#E26826" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="sticky mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0">
              <Image
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src="/images/LeadershipTeam.jpg"
                alt="Shift leaders picking up food"
                fill
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
            <h2 className="text-base font-semibold leading-7 text-secondary-400">
              Hunger Fighters
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dedicated to serving
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Our Shift Leaders play a critical role in ensuring the success of
              our operations. These dedicated volunteers commit to leading
              regular weekly shifts for a semester, during which they are
              responsible for managing and training other volunteers,
              coordinating food recovery efforts, and preparing and serving
              nutritious meals to those in need. With their leadership and
              guidance, our Shift Leaders help to create a supportive and
              inclusive environment that empowers all volunteers to make a
              meaningful impact in the fight against hunger and food waste. We
              are grateful for their commitment and passion for our mission.
            </p>
          </div>
        </div>
      </div>

      <div className="relative isolate mt-4 mb-16 sm:mt-0 sm:pt-32">
        <svg
          className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-50">
            <path
              d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          />
        </svg>
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[max(50%,38rem)] w-[82.0625rem]"
            >
              <path
                id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
              />
              <defs>
                <linearGradient
                  id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                  x1="1313.17"
                  x2="-88.881"
                  y1=".201"
                  y2="539.417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E67B3F" />
                  <stop offset={1} stopColor="#F7C7A3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end">
            <svg
              viewBox="0 0 1313 771"
              aria-hidden="true"
              className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            >
              <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-xl font-semibold leading-8 tracking-tight text-secondary sm:text-lg">
                We appreciate our shift leaders!
              </h2>
            </div>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-10 sm:grid-cols-3 xl:mx-0 xl:max-w-none xl:grid-cols-4">
              {listChunks.map((chunk, i) => {
                return (
                  <ul className="text-center sm:text-left" key={i}>
                    {chunk.map((person) => (
                      <li className="text-lg font-bold sm:text-xl" key={person}>
                        {person}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { api } from "~/utils/api";

type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  {
    label: "Pounds of Food Recovered",
    value: "21,629",
  },
  {
    label: "Meals Served",
    value: "21,447",
  },
  {
    label: "Hours of Service",
    value: "3,105",
  },
];

type TimelineEvent = {
  name: string;
  description: string;
  date: string;
  dateTime: string;
};

const timeline: TimelineEvent[] = [
  {
    name: "Chartered Organization",
    description:
      "CKAU was chartered as a student organization at Auburn University. Operations began by serving 70 meals per week at the food pantry of Auburn United Methodist Church.",
    date: "Mar 2011",
    dateTime: "2011-03",
  },
  {
    name: "UNWFP Affiliated",
    description: "CKAU became an affiliated organization of the UNWFP.",
    date: "Jan 2014",
    dateTime: "2014-01",
  },
  {
    name: '"Kitchen of the Year"',
    description:
      'Auburn\'s chapter was among eight individuals or campus chapters recognized at the Food Waste and Hunger Summit, where they earned the "Kitchen of the Year" Award in the Campus Kitchens Project network.',
    date: "Mar 2017",
    dateTime: "2017-03",
  },
  {
    name: "100,000 Meals Delivered",
    description:
      "Since 2011, CKAU has delivered over 100,000 meals to those in the East Central Alabama communities.",
    date: "Apr 2019",
    dateTime: "2019-04",
  },
];

const Home: NextPage = () => {
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
      <div className="flex w-full flex-col items-center justify-center gap-12">
        <div className="relative isolate w-full overflow-hidden bg-gray-900">
          <Image
            src="/images/OldExecHero.jpg"
            alt=""
            fill
            className=" -z-10 object-cover brightness-50 contrast-75"
          />
          <div className="mx-auto bg-gradient-to-t from-[rgb(3,36,77,0.3)] to-[rgb(3,36,77,0.1)] px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
                    className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400"
                  >
                    Dontate Now
                  </Link>
                  <Link
                    href="https://signup.com/group/1225782704046"
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Volunteer with us <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our mission
              </h2>
              <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    Fighting food waste and hunger all at once by recovering
                    excess food from on-campus dining halls and serving
                    nutritious meals to those in need. Our student-led{" "}
                    <em>501(c)3 non-profit organization</em> is dedicated to
                    empowering volunteers and promoting sustainability in
                    Auburn's community and the broader Lee County area.
                  </p>
                  <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    With the support of the Office of Public Service in
                    University Outreach, we are empowered to effect positive
                    change through our dedicated team of volunteers. Our
                    collective efforts have resulted in the recovery of over
                    160,746 pounds of food and the provision of more than
                    153,400 meals to members of both Auburn University and Lee
                    County. We remain committed to our mission and look forward
                    to continuing our impactful work in the future.
                  </p>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="grid grid-cols-1 space-y-8 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-1 lg:text-left">
                    <div className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-secondary">
                        2022 - 2023
                      </dt>
                    </div>
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.label}
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-primary">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 my-14 w-full bg-primary-700 pb-20 sm:pb-24 xl:pb-0">
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
          <div className="sticky mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative hidden aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:block xl:aspect-auto">
                <Image
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="/images/PickupShift.jpg"
                  alt="Shift leaders picking up food"
                  fill
                />
              </div>
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:hidden xl:aspect-auto">
                <Image
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="/images/PickupShiftRect.jpg"
                  alt="Shift leaders picking up food"
                  fill
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
              <h2 className="text-base font-semibold leading-7 text-secondary-400">
                Fork hunger!
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Volunteer with us
              </p>
              <p className="mt-6 text-base leading-7 text-gray-300">
                Our work wouldn't be possible without the support of our amazing
                team of volunteers. Volunteer with us to recover excess food
                from campus dining halls and serve nutritious meals to those in
                need. If you're ready to roll up your sleeves and join the fight
                against hunger, click the link below to explore our volunteer
                opportunities and sign up today!
              </p>
              <div className="mt-8">
                <Link
                  href="https://signup.com/group/1225782704046"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-6 pb-12 sm:mt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary">
              Our History
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Forking hunger is what we do
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Campus Kitchen at Auburn University has experienced
              significant growth since our chartering in 2011. Resulting in the
              ability to empower more volunteers, develop sustainable practices,
              and create positive change in the community.
            </p>
          </div>
        </div>

        <div className="mx-auto -mt-8 max-w-7xl px-6 pb-16 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-secondary"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:ml-8 lg:-mr-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

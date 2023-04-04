import { type NextPage } from "next";
import PageHead from "~/components/PageHead";
import Image from "next/image";
import history from "~/data/history";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

const images = [
  {
    src: "/images/history/history-1.jpg",
    alt: "A group of volunteers preparing food",
  },
  {
    src: "/images/history/history-2.jpg",
    alt: "A group of volunteers preparing food",
  },
  {
    src: "/images/history/history-3.jpg",
    alt: "A group of volunteers preparing food",
  },
  {
    src: "/images/history/history-4.jpg",
    alt: "A group of volunteers preparing food",
  },
  {
    src: "/images/history/history-5.png",
    alt: "A group of volunteers preparing food",
  },
];

const History: NextPage = () => {
  return (
    <>
      <PageHead
        title="History"
        description="History page for The Campus Kitchen at Auburn University"
      />

      <div className="bg-white py-8 md:py-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our History
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              The Campus Kitchen at Auburn University has a rich history of
              tackling food waste and hunger in East Central Alabama
              communities. Our growth and success are a testament to the hard
              work and dedication of our volunteers and the support of our
              partners. Learn more about our journey and impact below.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {images.map((image, imageIndex) => (
            <div
              key={image.src}
              className={`${
                imageIndex == 1 || imageIndex == 4 ? "-rotate-2" : "rotate-2"
              } relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl`}
            >
              <Image
                src={image.src}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
                fill
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:py-20 lg:px-8">
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
              100+
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                Dedicated volunteers
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Committed to leading regular weekly shifts for a semester.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary-700 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              153,000 meals
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                We&apos;re proud to say we&apos;ve delivered over 153,000 meals
                to community members in need.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                Forking hunger, one meal at a time.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-300 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              160,000 lbs
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Recovered food
              </p>
              <p className="mt-2 text-base leading-7 text-secondary-50">
                Enabling us to make a meaningful impact by providing nutritious
                meals while reducing food waste.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-8 lg:max-w-7xl lg:px-12">
        <div className="md:border-l md:border-gray-100 md:pl-6">
          <div className="flex max-w-3xl flex-col space-y-16">
            {history.map((h) => (
              <div
                key={h.id}
                className="md:grid md:grid-cols-4 md:items-baseline"
              >
                <div className="group relative flex flex-col items-start md:col-span-3">
                  <h2 className="text-base font-semibold tracking-tight text-gray-800">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                    <Link href={h.path}>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative z-10">{h.title}</span>
                    </Link>
                  </h2>
                  <div className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-gray-400 md:hidden">
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-gray-200" />
                    </span>
                    {h.years}
                  </div>
                  <p className="relative z-10 mt-2 text-sm text-gray-500">
                    {h.summary}
                  </p>
                  <div
                    aria-hidden="true"
                    className="relative z-10 mt-4 flex items-center text-sm font-medium text-secondary"
                  >
                    Learn more
                    <MdChevronRight
                      aria-hidden="true"
                      className="ml-1 h-4 w-4 stroke-current"
                    />
                  </div>
                </div>
                <div className="relative z-10 order-first mt-1 mb-3 hidden items-center text-sm text-gray-400 md:block">
                  {h.years}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;

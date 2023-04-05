import { type GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import PageHead from "~/components/PageHead";
import history from "~/data/history";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.years as string;
  const isArticle: boolean = await new Promise((resolve) => {
    const articleExists = history.some((e) => e.path.split("/")[2] === slug);
    resolve(articleExists);
  });

  if (!isArticle) {
    return {
      notFound: true, //redirects to 404 page
    };
  }

  return {
    props: {},
  };
};

const HistoryArticle = () => {
  const router = useRouter();
  const { years } = router.query;
  const index = history.findIndex((e) => e.path.split("/")[2] === years);
  if (index !== -1) {
    const article = history[index];
    const previous = index === 0 ? null : history[index - 1];
    const next = index === history.length - 1 ? null : history[index + 1];

    if (article)
      return (
        <>
          <PageHead title={article.years} description={article.description} />
          <div className="mt-16 sm:px-8 lg:mt-24">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="xl:relative">
                    <div className="mx-auto max-w-2xl">
                      <Link
                        href="/history"
                        aria-label="Go back to history"
                        className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-secondary-100 ring-1 ring-secondary-100/20 transition  lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
                      >
                        <MdArrowBack className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
                      </Link>

                      <article>
                        <header className="flex flex-col">
                          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                            {article.title}
                          </h1>
                          <div className="order-first flex items-center text-base text-zinc-400">
                            <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
                            <span className="ml-3">{article.years}</span>
                          </div>
                        </header>
                        <div className="my-20 mt-8 space-y-10">
                          {article.img && (
                            <Image
                              src={article.img}
                              alt=""
                              width={600}
                              height={400}
                              className="max-h-96 w-full max-w-2xl rounded-3xl object-cover"
                            />
                          )}
                          <p className="leading-7 text-gray-600">
                            {article.description}
                          </p>
                        </div>
                        {article.executive && (
                          <>
                            <h2 className="mt-16 mb-4 text-xl font-bold leading-7 text-zinc-800">
                              About the team
                            </h2>
                            <div className="my-2">
                              <ul
                                role="list"
                                className="grid grid-cols-2 gap-x-8 gap-y-1 sm:gap-y-4 xl:col-span-2"
                              >
                                {article.executive.map((person) => (
                                  <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                      <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                          {person.name}
                                        </h3>
                                        <p className="text-sm font-semibold leading-6 text-secondary">
                                          {person.position}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}
                        {article.stats && (
                          <>
                            <h2 className="mt-16 mb-4 text-xl font-bold leading-7 text-zinc-800">
                              Year in numbers
                            </h2>
                            <dl className="my-12 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2">
                              {article.stats.map((stat) => (
                                <div
                                  key={stat.title}
                                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                                >
                                  <dt className="text-sm leading-6 text-gray-600">
                                    {stat.title}
                                  </dt>
                                  <dd className="order-first text-lg font-semibold tracking-tight text-gray-900">
                                    {stat.value}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </>
                        )}
                      </article>
                      <div className="my-16 flex justify-between">
                        <Link
                          href={previous ? previous.path : "/history"}
                          className="flex items-center gap-1 text-sm text-gray-400 transition-all hover:text-secondary
                        "
                        >
                          <MdArrowBack />
                          {previous ? (
                            <span>{previous.years}</span>
                          ) : (
                            <span>Back to history</span>
                          )}
                        </Link>
                        <Link
                          href={next ? next.path : "/history"}
                          className="flex items-center gap-1 text-sm text-gray-400 transition-all hover:text-secondary
                        "
                        >
                          {next ? (
                            <span>{next.years}</span>
                          ) : (
                            <span>Go to history</span>
                          )}
                          <MdArrowForward />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  } else return <div>404</div>;
};

export default HistoryArticle;

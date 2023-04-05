import { type NextPage } from "next";
import faqs from "~/data/faqs";
import { Disclosure } from "@headlessui/react";
import { MdAdd, MdRemove } from "react-icons/md";
import PageHead from "~/components/PageHead";

const Faq: NextPage = () => {
  return (
    <>
      <PageHead title={"FAQs"} description={"Frequently asked questions"} />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Have a different question and can&apos;t find the answer you&apos;re
            looking for? Reach out to our support team by{" "}
            <a
              href="mailto:theckau@gmail.com"
              className="font-semibold text-secondary hover:text-secondary-300"
            >
              sending us an email
            </a>{" "}
            and we&apos;ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MdRemove
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <MdAdd className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

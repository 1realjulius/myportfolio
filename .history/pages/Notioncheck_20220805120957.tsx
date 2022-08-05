import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "react-feather";

export default function Notioncheck() {
  return (
    <div className=" bg-[#f7f2f2]  font-cadizMedium md:font-ApercuMedium min-h-screen">
      <div className="px-8 md:px-6 py-4">
        {/* nav and header */}
        <div>
          {/* navbar */}
          <div>
            <Link href="/" className="cursor-pointer">
              <span className="text-base cursor-pointer">iamjulius</span>
            </Link>
          </div>
          {/* header */}
          <div className="relative">
            <div className="relative mx-auto max-w-container px-4 pt-12 pb-8 sm:px-6 lg:px-8 lg:pt-20">
              <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col lg:pb-6">
                  <h1 className="flex flex-col items-start mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                    <span className=" font-ApercuBold">Notioncheck</span>
                    <Image
                      src="/Assets/underline-black.svg"
                      width={200}
                      height={20}
                      alt=""
                      className="absolute bottom-0 text-black"
                    />
                  </h1>
                  <p className="order-first text-base leading-7 text-sky-500">
                    Notion Templates and Checklists
                  </p>
                  <p className="mt-6 text-base leading-7 text-slate-700">
                    Simplify your workflows with my Functional, comprehensive,
                    and beginner-friendly notion checklists.
                  </p>
                  <div className="mt-3 flex flex-row items-center">
                    <div className="mr-4">
                      <Image
                        src="/Assets/notion-logo-1.svg"
                        width={40}
                        height={40}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="mx-1">
                      <Image
                        src="/Assets/gumroad-logo.png"
                        width={124}
                        height={62}
                        alt=""
                        className="mx-2"
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-4">
                    <a
                      href="https://transmit.tailwindui.com"
                      className="inline-flex justify-center rounded-lg text-sm py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="inline-flex items-center">
                          <span>Visit Website</span>
                          <svg
                            viewBox="0 0 20 20"
                            className="ml-1.5 h-5 w-5 fill-slate-400"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                    <a
                      href="#pricing"
                      className="inline-flex justify-center rounded-lg text-sm py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                    >
                      <span>
                        Get this template
                        <span aria-hidden="true" className="text-black/25">
                          →
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative lg:col-span-2">
                  <Image
                    src="/Assets/notioncheck-header-img.png"
                    width="740"
                    height="500"
                    className="relative z-20 -mb-36 aspect-[420/420] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
                    alt=""
                  />
                  <div className="z-0 hidden md:block">
                    <div className="absolute -top-4 -right-12 -left-12 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -top-12 bottom-0 -left-4 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -top-12 bottom-0 -right-4 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -top-12 right-10 mt-px flex h-8 items-end overflow-hidden">
                      <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 -left-48 flex h-8 items-end overflow-hidden">
                      <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* whats included section */}
        <section className="grid grid-cols-1 items-baseline gap-y-10 gap-x-6 lg:grid-cols-3">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
            What’s included
          </h2>
          <div className="max-w-2xl space-y-10 lg:col-span-2 prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
            <div className="[&amp;>:first-child]:mt-0 [&amp;>:last-child]:mb-0">
              <p>
                Transmit is a beautiful podcast template built with Tailwind CSS
                and Next.js, designed and built by the Tailwind CSS team. It’s
                production-ready and easy to customize, making it the perfect
                starting point for your own podcast site.
              </p>
            </div>
            <p>
              <strong>Built by experts</strong> — you can trust that all of the
              code is written following Tailwind CSS best practices, because
              it’s written by the same team who created and maintain the
              framework.
            </p>
            <p>
              <strong>Easy to customize</strong> — everything is styled with
              utility classes, directly in the markup. No configuration
              variables or complex CSS to wrestle with, just open the markup in
              your editor and change whatever you want.
            </p>
          </div>
        </section>
        {/* Screenshots */}
        <section className="grid grid-cols-1 gap-y-10 gap-x-6 pt-10 lg:grid-cols-3">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <Image
              src="https://tailwindui.com/img/templates/transmit/detail-01.png"
              alt="This is a detail image"
              width="42"
              height="280"
              className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
            />
            <Image
              src="https://tailwindui.com/img/templates/transmit/detail-02.png"
              alt="This is a detail image"
              width="42"
              height="280"
              className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
            />
            <Image
              src="https://tailwindui.com/img/templates/transmit/detail-03.png"
              alt="This is a detail image"
              width="42"
              height="280"
              className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
            />
            <Image
              src="https://tailwindui.com/img/templates/transmit/detail-04.png"
              alt="This is a detail image"
              width="42"
              height="280"
              className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"
            />
          </div>
        </section>
        {/* Others and testimonials */}
        <section
          id="faqs"
          className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 mt-32"
        >
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-14 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
            <div className="lg:col-span-4">
              <h2 className="text-base font-semibold leading-7 text-indigo-500">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
                Everything you need to know
              </p>
            </div>
            <div className="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
              <section>
                <h3 className="text-sm font-semibold leading-7 text-slate-400">
                  General
                </h3>
                <dl className="mt-2 divide-y divide-slate-100">
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      What does “lifetime access” mean exactly?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          Tailwind UI products are a{" "}
                          <strong>
                            one-time purchase, with no recurring subscription
                          </strong>
                          . When you purchase any Tailwind UI product, you have
                          access to all of the content in that product forever.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      What does “free updates” include?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          When you purchase any Tailwind UI product, any
                          improvements we make to that product will always be
                          free for anyone who owns that product.
                        </p>
                        <p>
                          <strong>Individual templates:</strong> When you buy an
                          individual template, any improvements we make to that
                          template will be available to you as part of your
                          original purchase.
                        </p>
                        <p>
                          So if we fix a bug or upgrade the template to use the
                          latest version of Tailwind CSS or Next.js, you can
                          download an updated version of the template free of
                          charge.
                        </p>
                        <p>
                          Any <em>new</em> templates we release are considered
                          separate products, and can be purchased separately.
                        </p>
                        <p>
                          <strong>All-access:</strong> When you purchase an
                          all-access license, you get access to every site
                          template available <em>and</em> every component
                          package available today, plus any new templates or
                          component packages we release in the future at no
                          additional cost.
                        </p>
                        <p>
                          This means that if we add a brand new social media
                          website template or new component package like
                          “Journalism”, access to those products are included in
                          your original purchase, with no upgrade cost.
                        </p>
                      </div>
                    </div>
                  </details>
                </dl>
              </section>
              <section>
                <h3 className="text-sm font-semibold leading-7 text-slate-400">
                  Compatibility
                </h3>
                <dl className="mt-2 divide-y divide-slate-100">
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      Are Figma, Sketch, or Adobe XD files included?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          No, design assets for tools like Figma, Sketch, or
                          Adobe XD are not included.
                        </p>
                        <p>
                          We dont produce high-quality design artifacts as part
                          of our own design and development process, so building
                          these extra resources means we cant spend as much
                          time creating new components and templates in code
                          which is where we believe we can provide the most
                          value.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      What JS framework is used?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          Our website templates are built using Next.js, so all
                          of the markup is written using React.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      What version of Tailwind CSS is used?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          Everything in Tailwind UI is designed and developed
                          for the latest version of Tailwind CSS, which is
                          currently Tailwind CSS v3.1.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      What browsers are supported?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          The components and templates in Tailwind UI are
                          designed to work in the latest, stable releases of all
                          major browsers, including Chrome, Firefox, Safari, and
                          Edge.
                        </p>
                        <p>We dont support Internet Explorer 11.</p>
                      </div>
                    </div>
                  </details>
                </dl>
              </section>
              <section>
                <h3 className="text-sm font-semibold leading-7 text-slate-400">
                  Licensing
                </h3>
                <dl className="mt-2 divide-y divide-slate-100">
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      Do I need to purchase a license for each project I work
                      on?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          Unlike most other templates/themes, you dont have to
                          buy a new Tailwind UI license every time you want to
                          use it on a new project.
                        </p>
                        <p>
                          As long as what youre building is allowed as per the
                          license, you can build as many sites as you want
                          without ever having to buy an additional license.
                        </p>
                        <p>
                          For more information and examples,{" "}
                          <a href="/license">read through our license</a>.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      Can I use Tailwind UI for client projects?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          Yes! As long what youre building is a custom website
                          developed for a single client, you can totally use
                          components and templates in Tailwind UI to help build
                          it.
                        </p>
                        <p>
                          The only thing you cant do is use Tailwind UI to
                          build a website or template that is resold to multiple
                          clients.
                        </p>
                        <p>
                          For more information and examples,{" "}
                          <a href="/license">read through our license</a>.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      Can I use Tailwind UI for my own commercial projects?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          Absolutely! Your license gives you permission to build
                          as many of your own projects as you like, whether
                          those are simple public websites or SaaS applications
                          that end users need to pay to access.
                        </p>
                        <p>
                          As long as what you’re building isn’t a website
                          builder or other tool that customers can use to create
                          their own sites using elements that originate from
                          Tailwind UI, you’re good to go.
                        </p>
                        <p>
                          For more information and examples,{" "}
                          <a href="/license">read through our license</a>.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      Can I use Tailwind UI in open source projects?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          Yep! As long as what youre building is some sort of
                          actual website and not a derivative component library,
                          theme builder, or other product where the primary
                          purpose is clearly to repackage and redistribute our
                          components, its totally okay for that project to be
                          open source.
                        </p>
                        <p>
                          For more information and examples of what is and isnt
                          okay, <a href="/license">read through our license</a>.
                        </p>
                      </div>
                    </div>
                  </details>
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      Can I sell templates/themes I build with Tailwind UI?
                      <svg
                        className="mt-0.5 ml-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div className="pt-6 pb-6">
                      <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                        <p>
                          No, you cannot use Tailwind UI to create derivative
                          products like themes, UI kits, page builders, or
                          anything else where you would be repackaging and
                          redistributing our components or templates for someone
                          else to use to build their own sites.
                        </p>
                        <p>
                          For more information and examples of what is and isnt
                          okay, <a href="/license">read through our license</a>.
                        </p>
                      </div>
                    </div>
                  </details>
                </dl>
              </section>
            </div>
          </div>
        </section>
        <div></div>
      </div>
    </div>
  );
}

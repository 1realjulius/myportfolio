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
              <p>
                We’ve taken just as much care with the code as we have with the
                design, so it’s also an invaluable resource if you want to study
                how experts build a website with Tailwind CSS and React.
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
            <p>
              <strong>Built with Next.js</strong> —&nbsp;the template is a
              well-structured, thoughtfully componentized Next.js project,
              giving you a codebase that’s productive and enjoyable to work in.
            </p>
            <p>
              <strong>Keyboard accessible</strong> — everything we build is
              keyboard accessible, and we carefully craft the markup to deliver
              the best screenreader experience we know how.
            </p>
            <p>
              <strong>Production-ready</strong> —&nbsp;rigorously tested in the
              latest versions of all browsers to handle lots of edge-cases you
              might easily miss yourself.
            </p>
            <p>
              <strong>Simple to deploy</strong> — production-ready and easily
              deployed anywhere that you can deploy a Next.js application, like
              Vercel or Netlify.
            </p>
          </div>
        </section>
        <div></div>
        {/* Screenshots */}
        <section className="grid grid-cols-1 gap-y-10 gap-x-6 pt-10 lg:grid-cols-3">
          <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">Screenshots</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <Image src="https://tailwindui.com/img/templates/transmit/detail-01.png" alt="This is a detail image" width='42' height='280' className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"/>
            <Image src="https://tailwindui.com/img/templates/transmit/detail-02.png" alt="This is a detail image" width='42' height='280' className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"/>
            <Image src="https://tailwindui.com/img/templates/transmit/detail-03.png" alt="This is a detail image" width='42' height='280' className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"/>
            <Image src="https://tailwindui.com/img/templates/transmit/detail-04.png" alt="This is a detail image" width='42' height='280' className="aspect-[384/246] rounded-lg bg-slate-200 ring-1 ring-slate-900/10"/>
            </div>
        </section>
        {/* Others and testimonials */}
        <div></div>
      </div>
    </div>
  );
}

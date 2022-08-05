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
          <h2 className="text-2xl  leading-9 tracking-tight text-slate-900">
            What’s included
          </h2>
          <div className="max-w-2xl space-y-10 lg:col-span-2 prose prose-slate prose-a: prose-a:text-sky-500 hover:prose-a:text-sky-600">
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
          <h2 className="text-2xl  leading-9 tracking-tight text-slate-900">
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
              <h2 className="text-base  leading-7 text-indigo-500">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
                Everything you need to know
              </p>
            </div>
            <div className="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
              <section>
                <h3 className="text-sm  leading-7 text-slate-400">General</h3>
                <dl className="mt-2 divide-y divide-slate-100">
                  <details className="group py-4 marker:content-['']">
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base  leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
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
                      <div className="prose prose-slate max-w-none prose-a: prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
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
                    <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base  leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
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
                      <div className="prose prose-slate max-w-none prose-a: prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
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
            </div>
          </div>
        </section>
        <div></div>
        {/* footer */}
        <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-900/5 py-10">
            <svg
              className="mx-auto h-5 w-auto text-slate-900"
              aria-hidden="true"
              viewBox="0 0 160 24"
              fill="none"
            >
              <path
                d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                className="fill-sky-400"
              ></path>
              <path
                d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="mt-5 text-center text-sm leading-6 text-slate-500">
              © 2022 Tailwind Labs Inc. All rights reserved.
            </p>
            <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
              <a href="/privacy-policy">Privacy policy</a>
              <div className="h-4 w-px bg-slate-500/20"></div>
              <a href="/changelog">Changelog</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

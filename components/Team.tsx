import React from "react";
import Top from "./Header";
import style from "@/components/pages/handycheera.module.css";
import Footer from "./Footer";

export default function Team() {
  return (
    <main className="bg-[#d9b99b]">
      <Top />
      <section>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2
              className={`text-5xl font-extrabold w-full sm:text-6xl text-white drop-shadow-2xl ${style.handy}`}
            >
              Business Owners
            </h2>
            <p className="mt-1 text-black dark:text-neutral-400">
              Creative people
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="/alfer.jpg"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Alfer Hipolito
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Founder / CEO
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I am a visionary leader passionate about driving innovation and
                inspiring teams to achieve greatness. .
              </p>

              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="/david.jpg"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    David Mercado
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    UI/UX Designer
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I specialize in creating intuitive and visually appealing user
                interfaces that enhance user experiences.
              </p>

              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="/ej.jpg"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    EJ Tana
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Chief Financial Officer
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                As a seasoned financial strategist, I drive fiscal health and
                support sustainable growth through effective financial
                management and planning.
              </p>

              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="/julius.jpg"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Julius Miclat
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Director of sales
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                With a proven track record in driving revenue growth, I am
                dedicated to forging strong partnerships and expanding market
                presence.
              </p>

              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="kent.jpg"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Kent Escala
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Dev-Ops
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I ensure seamless operations and scalability by managing our
                infrastructure and deployment processes.
              </p>

              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="ruben.jpg"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Ruben Cabotage
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    UI/UX Designer
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I am focused on crafting engaging and user-friendly interfaces
                that elevate product experiences.
              </p>

              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="/russ.jpg"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Russel Sanguyu
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Project Manager
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I excel in overseeing project execution with precision, ensuring
                timelines and deliverables are met efficiently.
              </p>

              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <a
              className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-neutral-700"
              href="#"
            >
              <h3
                className={`text-5xl font-extrabold w-full sm:text-6xl text-white drop-shadow-2xl ${style.handy}`}
              >
                We are hiring!
              </h3>
              <div>
                <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
                  See all opening positions
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

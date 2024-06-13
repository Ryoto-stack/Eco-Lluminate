"use client";

import React from "react";
import Top from "./Header";
import style from "@/components/pages/handycheera.module.css";
import Image from "next/image";
import Footer from "./Footer";

export function Collection() {
  return (
    <main className="bg-[#d9b99b] h-full w-full">
      <header>
        <Top />
      </header>
      {/* top text */}
      <div className="text-center flex-col flex justify-center items-center pt-20 ltr:sm:text-start rtl:sm:text-start">
        <h1
          className={`text-5xl pb-5 font-extrabold sm:text-6xl text-[#ffffff] drop-shadow-2xl ${style.handy}`}
        >
          Collections
        </h1>
        <p className="mb-5 text-black">Some Lorem Ipsum Shit text here</p>
        <div className="flex flex-row p-none w-full justify-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Shop Now
        </a>
        </div>
      </div>
      {/* Collection */}
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="space-y-2">
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Blooming-Lavender.png"
              alt="lavender"
            />
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Candle-Tag.png"
              alt="tag"
            />
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Card-1.png"
              alt="cardone"
            />
          </div>
          <div className="space-y-2">
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Choco-Vanilla-&-Fresh-Mint.png"
              alt="lavender"
            />
            <img
              className=" object-cover"
              width="500"
              height="500"
              src="/Fruity-Lemon.png"
              alt="fruity-lemon"
            />
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Paper-Bag-Dark.png"
              alt="paperbag"
            />
          </div>
          <div className="space-y-2">
            <Image
              className="object-cover"
              width="500"
              height="500"
              src="/Citronella.png"
              alt="citronella"
            />
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Stock-Candle 2.png"
              alt="creamymocha"
            />
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Strawberry-and-Champagne.png"
              alt="strawberychampagne"
            />
          </div>
          <div className="space-y-2">
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Flyer-1.png"
              alt="citronella"
            />
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Creamy-Mocha.png"
              alt="creamymocha"
            />
            <img
              className="object-cover"
              width="500"
              height="500"
              src="/Packaging-1.png"
              alt="strawberychampagne"
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </main>
  );
}

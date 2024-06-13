import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import style from "./handycheera.module.css"

export function Spotlights() {
  return (
    <main>
      <div className="flex-col h-screen w-full flex antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="orange"
        />

        <div className=" p-4 max-w-7xl  mx-auto relative z-10 flex items-center justify-center w-full pt-20 md:pt-0 flex-col">
          <Image
            src={"/nobglogo.png"}
            alt="logo center"
            height={200}
            width={300}
            className="object-contain"
          />
        </div>

        <p className={`pb-8 flex justify-center text-black text-7xl ${style.handy}`}>Freshen up your Senses</p>
        <p className={`pb-2 flex justify-center text-black text-xl ${style.vonique}`}>Unleash the Safeness, at your Fingertips</p>
      </div>
    </main>
  );
}

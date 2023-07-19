"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import avaxLogo from "@/public/images/avax-logo.svg";
import arbLogo from "@/public/images/arb-logo.svg";
import polyLogo from "@/public/images/matic-logo.svg";
import bscLogo from "@/public/images/bnb-logo.svg";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-zinc-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-zinc-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Unlimited Utilies</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Supported Markets</h3>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex justify-between items-center text-lg p-4 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 0
                      ? "bg-white shadow-md border-zinc-200 hover:shadow-lg"
                      : "bg-zinc-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(0);
                  }}
                >
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Arbitrum
                  </div>
                  <div className="relative flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0">
                    <Image src={arbLogo} fill alt="Arbitrum" className="p-2" />
                  </div>
                </a>
                <a
                  className={`flex justify-between items-center text-lg p-4 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-zinc-200 hover:shadow-lg"
                      : "bg-zinc-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    BNB Chain
                  </div>
                  <div className="relative flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0">
                    <Image src={bscLogo} fill alt="BNB Chain" className="p-2" />
                  </div>
                </a>
                <a
                  className={`flex justify-between items-center text-lg p-4 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-zinc-200 hover:shadow-lg"
                      : "bg-zinc-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Polygon
                  </div>
                  <div className="relative flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0">
                    <Image src={polyLogo} fill alt="Polygon" className="p-2" />
                  </div>
                </a>
                <a
                  className={`flex justify-between items-center text-lg p-4 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-zinc-200 hover:shadow-lg"
                      : "bg-zinc-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Avalanche
                  </div>
                  <div className="relative flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0">
                    <Image src={avaxLogo} fill alt="Polygon" className="p-2" />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  <Transition
                    show={tab === 0}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      />
                    </div>
                  </Transition>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

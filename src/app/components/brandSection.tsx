"use client";

import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="bg-primary py-16 px-6">
      {/* Title + Subtitle */}
      <div className=" mb-10 ml-15">
        <h2 className="text-4xl font-extrabold">
          <span className="text-white">The best brands choose</span>{" "}
          <span className="text-black">Appoint Digital</span>
        </h2>
        <p className="text-xs font-bold text-black mt-3 max-w-lg">
          As a trusted Digital Marketing Agency Company, Bird has been featured
          in top-tier media and industry-leading platforms, showcasing our
          expertise in delivering exceptional digital marketing results.
        </p>
      </div>

      {/* Brand Logos Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {/* Brand 1 - Black bg */}
        <div className="flex items-center justify-center bg-black  h-24 rounded-full">
          <Image
            src="/images/brand1.svg"
            alt="Brand 1"
            width={100}
            height={60}
          />
        </div>

        {/* Brand 2 - Yellow bg */}
        <div className="flex items-center justify-center bg-primary h-24 rounded-full border border-gray-400/50 shadow-[0_4px_0_rgba(0,0,0,0.15)]">
          <Image
            src="/images/brand2.svg"
            alt="Brand 4"
            width={100}
            height={60}
          />
        </div>

        {/* Brand 3 - Black bg */}
        <div className="flex items-center justify-center bg-black  h-24 rounded-full">
          <Image
            src="/images/brand3.svg"
            alt="Brand 3"
            width={100}
            height={60}
          />
        </div>

        {/* Brand 4 - Yellow bg */}
        <div className="flex items-center justify-center bg-primary  h-24 rounded-full border border-gray-400/50 shadow-[0_4px_0_rgba(0,0,0,0.15)]">
          <Image
            src="/images/brand4.svg"
            alt="Brand 4"
            width={100}
            height={60}
          />
        </div>

        {/* Brand 5 - Black bg */}
        <div className="flex items-center justify-center bg-black  rounded-full">
          <Image
            src="/images/brand5.svg"
            alt="Brand 5"
            width={100}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}

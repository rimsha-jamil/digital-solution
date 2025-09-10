"use client";
import React from "react";
import Image from "next/image";

export default function AgencyRole() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Globe */}
        <div className="relative flex justify-start">
          <Image
            src="/images/globehalf2.svg"
            alt="Globe"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* RIGHT SIDE (Text Section) */}
        <div className="space-y-6 pr-20">
          <h2 className="text-2xl font-bold leading-snug text-primary">
            A Leading Global Full Service <br /> Digital Marketing Agency
          </h2>

          <p className="text-gray-300 text-xs leading-relaxed max-w-lg">
            Bird is a premier Digital Marketing Agency with a global presence,
            known for delivering top-tier digital solutions to businesses
            worldwide. Our dynamic agency stands out for its ability to enhance
            digital visibility for businesses, using the latest technologies and
            innovative approaches.
          </p>

          <h3 className="text-xl font-semibold text-primary">
            Enhancing Your Digital Presence
          </h3>

          <p className="text-gray-300 text-xs leading-relaxed max-w-lg">
            In the rapidly changing digital environment, having a strong digital
            presence is crucial. Companies around the world recognize the
            importance of this digital domain, and Birds digital marketing
            services are at the forefront of this digital revolution. We
            specialize in boosting the digital profiles of businesses, ensuring
            their success in the online marketplace.
          </p>

          <button className="bg-primary text-black px-6 py-3 rounded font-semibold cursor-pointer transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

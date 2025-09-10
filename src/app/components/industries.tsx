// app/industries/page.tsx
import React from "react";
import Image from "next/image";

const industries = [
  "Electrician Digital Marketing",
  "Plumber Digital Marketing",
  "Real Estate Digital Marketing",
  "Healthcare Digital Marketing",
  "E-commerce Digital Marketing",
  "Education Digital Marketing",
  "Law Firm Digital Marketing",
  "Restaurant Digital Marketing",
  "Construction Digital Marketing",
  "Travel & Tourism Digital Marketing",
  "Fitness & Gym Digital Marketing",
  "Finance Digital Marketing",
  "IT Services Digital Marketing",
  "Automotive Digital Marketing",
  "Beauty & Salon Digital Marketing",
  "Entertainment Digital Marketing",
  "Hospitality Digital Marketing",
  "NGO Digital Marketing",
  "Retail Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
  "Startup Digital Marketing",
];

const Industries = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Industries We Work With
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          At Bizi, we extend our Digital Marketing Agency expertise across a
          diverse range of industries, tailoring strategies to meet the unique
          demands and opportunities each sector presents.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {industries.map((industry, index) => {
          // Insert cube image at a specific spot (example after 8th item)
          if (index === 8) {
            return (
              <div
                key="cube"
                className="col-span-2 col-start-2 row-span-4 flex items-center justify-center"
              >
                <Image
                  src="/images/dice.svg" // put your cube image in /public/cube.png
                  alt="Cube"
                  width={220}
                  height={220}
                  className="drop-shadow-[0_0_25px_rgba(255,200,0,0.5)]"
                />
              </div>
            );
          }

          // Normal industry item
          return (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
              <span className="text-sm md:text-base">{industry}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Industries;

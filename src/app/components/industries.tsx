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
import { Diamond } from "lucide-react";

export default function Industries() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center p-8">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industries We Work With
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            At Blitz, we extend our Digital Marketing Agency expertise across a
            diverse range of industries, tailoring strategies to meet the unique
            demands and opportunities each sector presents.
          </p>
        </div>

        <div className="relative grid grid-cols-12 gap-4 items-center justify-items-center max-w-5xl mx-auto">
          {/* Top 3 rows - spanning full width */}
          <div className="col-span-12 grid grid-cols-4 gap-4 mb-4">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`top-3-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-center h-full">
                    <Diamond className="w-4 h-4 text-amber-400 mr-2 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-white text-xs font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-4 mb-4">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`top-2-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-center h-full">
                    <Diamond className="w-4 h-4 text-amber-400 mr-2 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-white text-xs font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-4 mb-8">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`top-1-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-center h-full">
                    <Diamond className="w-4 h-4 text-amber-400 mr-2 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-white text-xs font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          {/* Middle section with left column, center cube, right column */}
          {/* Left Column */}
          <div className="col-span-3 flex flex-col gap-4">
            {Array(8)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`left-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-start h-full">
                    <Diamond className="w-4 h-4 text-amber-400 mr-2 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-white text-xs font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          {/* Central 3D Cube */}
          <div className="col-span-6 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-2xl blur-xl scale-150" />

              {/* Cube container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/images/dice.svg" // put your cube image in /public/cube.png
                  alt="Cube"
                  width={220}
                  height={220}
                  className="drop-shadow-[0_0_25px_rgba(255,200,0,0.5)]"
                />
              </div>

              {/* Additional lighting effects */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-300/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-8 bg-amber-500/10 rounded-full blur-xl" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 flex flex-col gap-4">
            {Array(8)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`right-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-start h-full">
                    <span className="text-white text-xs font-medium leading-tight mr-2">
                      {text}
                    </span>
                    <Diamond className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          {/* Bottom 3 rows - spanning full width */}
          <div className="col-span-12 grid grid-cols-4 gap-4 mt-8">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`bottom-1-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-center h-full">
                    <Diamond className="w-4 h-4 text-amber-400 mr-2 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-white text-xs font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-4 mt-4">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`bottom-2-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-center h-full">
                    <Diamond className="w-4 h-4 text-amber-400 mr-2 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-white text-xs font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>

          <div className="col-span-12 grid grid-cols-4 gap-4 mt-4">
            {Array(4)
              .fill("Electrician Digital Marketing")
              .map((text, index) => (
                <div
                  key={`bottom-3-${index}`}
                  className="group relative w-40 h-12 bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2 hover:bg-black/60 transition-all duration-300 hover:border-amber-400/50 hover:scale-105"
                >
                  <div className="flex items-center justify-center h-full">
                    <Diamond className="w-4 h-4 text-amber-400 mr-2 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-white text-xs font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
          </div>
        </div>

        {/* Additional atmospheric effects */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

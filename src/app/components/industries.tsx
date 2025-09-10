"use client";
import React from "react";
import Image from "next/image";

const industries = [
  "Electrician Digital Marketing",
  "Plumber Digital Marketing",
  "Dentist Digital Marketing",
  "Lawyer Digital Marketing",
  "Real Estate Digital Marketing",
  "Restaurant Digital Marketing",
  "Gym & Fitness Digital Marketing",
  "Education Digital Marketing",
  "Healthcare Digital Marketing",
  "Salon & Spa Digital Marketing",
  "E-commerce Digital Marketing",
  "Travel & Tourism Digital Marketing",
  "Fashion & Apparel Digital Marketing",
  "Jewelry Digital Marketing",
  "IT & Software Digital Marketing",
  "Automobile Digital Marketing",
  "Interior Design Digital Marketing",
  "Construction Digital Marketing",
  "Photography Digital Marketing",
  "Food & Beverage Digital Marketing",
  "Event Management Digital Marketing",
  "NGO Digital Marketing",
  "Media & Entertainment Digital Marketing",
  "Sports & Fitness Digital Marketing",
  "Sports & Fitness Digital Marketing",
  "Sports & Fitness Digital Marketing",
  "Sports & Fitness Digital Marketing",
  "Sports & Fitness Digital Marketing",
  "Sports & Fitness Digital Marketing",
  "Sports & Fitness Digital Marketing",
  "Sports & Fitness Digital Marketing",
];

const cols = 4;
const cubeColSpan = 2;
const cubeRowSpan = 3;

// choose rows so there is enough space for industries around the cube
const rows = Math.max(
  5,
  Math.ceil((industries.length + cubeColSpan * cubeRowSpan) / cols)
);

const cubeRowStart = Math.floor((rows - cubeRowSpan) / 2) + 1; // centered

export default function Industries() {
  // build grid positions (row-major), but skip cells occupied by the cube
  const positions: { row: number; col: number }[] = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      const inCubeRows = r >= cubeRowStart && r < cubeRowStart + cubeRowSpan;
      const inCubeCols = c >= 2 && c <= 3; // middle two columns reserved for cube
      if (inCubeRows && inCubeCols) continue; // skip central cube cells
      positions.push({ row: r, col: c });
    }
  }

  // place industries sequentially into the available grid cells
  const placed = positions.slice(0, industries.length).map((pos, i) => ({
    ...pos,
    text: industries[i],
  }));

  const renderLabel = (text: string) => {
    // force last word (usually "Marketing") on a new line
    const idx = text.lastIndexOf(" ");
    if (idx === -1) return <span>{text}</span>;
    const first = text.slice(0, idx);
    const last = text.slice(idx + 1);
    return (
      <span className="text-gray-300 text-sm leading-tight w-40 whitespace-pre-line text-left">
        {first}
        <br />
        {last}
      </span>
    );
  };

  return (
    <section className="bg-black text-white py-20">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-semibold">Industries We Work With</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm">
          At ADS, we extend our Digital Marketing Agency expertise across a
          diverse range of industries, tailoring strategies to meet the unique
          demands and opportunities each sector presents.
        </p>
      </div>

      {/* Grid container */}
      <div
        className="container mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
          gridTemplateRows: `repeat(${rows}, auto)`,
          gap: "1.25rem",
          alignItems: "start",
        }}
      >
        {/* Render industry cells */}
        {placed.map((p, i) => {
          const isLeftCol = p.col === 1;
          const isRightCol = p.col === cols;
          const isCenterCol = p.col === 2 || p.col === 3;

          const cellStyle = {
            gridColumn: `${p.col}`,
            gridRow: `${p.row}`,
          } as React.CSSProperties;

          // left-most: text right-aligned + diamond on right
          if (isLeftCol) {
            return (
              <div
                key={i}
                style={cellStyle}
                className="flex items-start justify-end gap-3 pr-4"
              >
                {/*
                  text first (right-aligned), diamond after it (on the right).
                  We put text in a right-aligned container so line-break looks like Figma.
                */}
                <div className="text-right">{renderLabel(p.text)}</div>
                <div className="w-3 h-3 bg-yellow-500 rotate-45 mt-1" />
              </div>
            );
          }

          // right-most: diamond then text (left aligned)
          if (isRightCol) {
            return (
              <div
                key={i}
                style={cellStyle}
                className="flex items-start gap-3 pl-4"
              >
                <div className="w-3 h-3 bg-yellow-500 rotate-45 mt-1" />
                <div className="text-start">{renderLabel(p.text)}</div>
              </div>
            );
          }

          // center columns (above/below cube): center align (diamond left)
          return (
            <div
              key={i}
              style={cellStyle}
              className="flex items-start justify-center gap-3"
            >
              <div className="w-3 h-3 bg-yellow-500 rotate-45 mt-1" />
              <div className="text-start">{renderLabel(p.text)}</div>
            </div>
          );
        })}

        {/* Cube - occupies middle two columns and cubeRowSpan rows */}
        <div
          style={{
            gridColumn: `2`, // just column 3
            gridRow: `${cubeRowStart} / span ${cubeRowSpan}`, // still center vertically
          }}
          className="flex items-center justify-center"
        >
          <Image
            src="/images/dice.svg"
            alt="Cube"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

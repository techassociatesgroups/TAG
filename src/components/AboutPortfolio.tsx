'use client';

import React from "react";

export function AboutPortfolio() {

  const portfolioItems = [
    "Educational Website",
    "E-Commerce Store",
    "Business Landing Page",
    "Portfolio Website",
    "Restaurant Website",
    "Custom CRM Tool",
    "Event Booking Website",
    "Real Estate Website",
    "Consulting Website",
    "Startup Landing Page",
    "Blog & Content Platform",
    "Healthcare Website",
  ];

  return (
    <section id="about" className="w-full py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter">
          About Tech Associates Groups
        </h2>

        <p className="text-white/70 mt-4 max-w-3xl mx-auto text-tight">
          We bridge the gap for Indian small businesses — affordable, reliable,
          and performance-driven digital solutions to help you get results online.
        </p>
      </div>

      <div className="mt-10 py-6">
        <div className="overflow-hidden">
          <div
            className="flex gap-8 py-4"
            style={{
              animation: "marquee 18s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {portfolioItems.map((title, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-6 px-6 py-4 glass-card rounded-full"
              >
                {title}
              </div>
            ))}

            {/* duplicate once only to make infinite scroll smooth */}
            {portfolioItems.map((title, i) => (
              <div
                key={`copy-${i}`}
                className="inline-flex items-center justify-center mx-6 px-6 py-4 glass-card rounded-full"
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}
      </style>
    </section>
  );
}

import React from "react";
import SectionGrid from "./SectionGrid";

const Explanation = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="bg-gradient-to-r from-blue-500 via-blue-600 to-slate-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl pb-10">
            Focus on your frontend, we got you covered{" "}
            <span className="text-black">🤝</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="/computer.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <SectionGrid />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explanation;

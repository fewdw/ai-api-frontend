import Link from "next/link";
import React from "react";

const MainTitle = () => {
  return (
    <section className="flex flex-col justify-center items-start h-full">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="lg:py-24">
          <h1 className="bg-gradient-to-r from-blue-500 via-blue-600 to-slate-800 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl leading-tight">
            Create Your Endpoint.
            <span className="block mt-2">Deploy In Seconds.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-gray-700">
            Need an endpoint for a project or a quick demo?
            <br />
            Use our AI to generate and deploy it in&nbsp;
            <span className="inline underline text-red-500 hover:text-red-700">
              seconds
            </span>
            .
          </p>

          <Link
            href="/learn"
            className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainTitle;

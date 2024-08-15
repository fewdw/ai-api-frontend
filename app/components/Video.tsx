import React from "react";

const Video = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full my-8">
            <video
              className="w-full h-full object-cover"
              src="https://file-examples.com/storage/fe519944ff66ba53b99c446/2017/04/file_example_MP4_1280_10MG.mp4"
              controls
            ></video>
          </div>

          <div className="lg:py-24">
            <h1 className="bg-gradient-to-r from-blue-500 via-blue-600 to-slate-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Create Your Endpoint.
              <span className="sm:block pb-1">Deploy In Seconds.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Need an endpoint for a project or a quick demo?
              <br />
              Use our AI to generate and deploy it in&nbsp;
              <span className="inline underline text-red-500 hover:text-red-700">
                seconds
              </span>
              .
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;

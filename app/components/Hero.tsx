import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Create Your Endpoint.
            <span className="sm:block pb-1">Deploy In Seconds.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Need an endpoint for a project or a quick demo? Use our AI to
            generate and deploy it in seconds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

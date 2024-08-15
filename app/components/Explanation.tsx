import React from "react";

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
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum explicabo quidem voluptatum voluptas illo accusantium
                ipsam quis, vel mollitia? Vel provident culpa dignissimos
                possimus, perferendis consectetur odit accusantium dolorem amet
                voluptates aliquid, ducimus tempore incidunt quas. Veritatis
                molestias tempora distinctio voluptates sint! Itaque quasi
                corrupti, sequi quo odit illum impedit!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explanation;

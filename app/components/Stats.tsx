import React from "react";

const Stats = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
          Join Our Growing Community
        </h2>
      </div>

      <dl className="mt-6 flex flex-wrap justify-center gap-4 sm:mt-8">
        <div className="flex flex-col w-64 rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Endpoints
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            17
          </dd>
        </div>

        <div className="flex flex-col w-64 rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Users
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            7
          </dd>
        </div>

        <div className="flex flex-col w-64 rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Api Requests
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            461
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Stats;

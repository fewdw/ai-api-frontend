import React from "react";

const SectionGrid = () => {
  return (
    <div className="lg:pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 align-middle">
        <div className="flex flex-col items-start justify-start p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
          <span className="text-4xl">🛠️</span>
          <h2 className="mt-4 font-bold text-xl">Create your endpoint</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Easily set up your own API endpoint by simply providing a JSON
            format and a custom pathname. No coding required—just upload, and
            your data is ready to be accessed online.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
          <span className="text-4xl">🚀</span>
          <h2 className="mt-4 font-bold text-xl">Deploy Instantly</h2>
          <p className="mt-2 text-gray-600 text-sm">
            With just one click, your API is live and ready to use. Forget about
            lengthy setups or waiting times—your data is instantly accessible at
            the endpoint you specify.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
          <span className="text-4xl">🎉</span>
          <h2 className="mt-4 font-bold text-xl">Free unlimited access</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Enjoy unlimited access to your hosted APIs without any hidden fees
            or restrictions. It's free, forever—host and share your data
            effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionGrid;

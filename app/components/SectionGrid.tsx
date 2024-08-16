import React from "react";

const SectionGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <span className="text-2xl">🤖</span>
        <h2 className="mt-2 font-bold">Describe your API</h2>
        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Provide a description and let our AI handle the rest.
        </p>
      </div>

      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <span className="text-2xl">📑</span>
        <h2 className="mt-2 font-bold">Choose the format</h2>
        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Select the desired format for your API.
        </p>
      </div>

      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <span className="text-2xl">⚡</span>
        <h2 className="mt-2 font-bold">Generate it within seconds</h2>
        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Your API endpoint is generated and hosted instantly.
        </p>
      </div>

      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <span className="text-2xl">🔓</span>
        <h2 className="mt-2 font-bold">Free unlimited access</h2>
        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Enjoy unrestricted access to your API without any limitations.
        </p>
      </div>

      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <span className="text-2xl">📜</span>
        <h2 className="mt-2 font-bold">View past logs</h2>
        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Keep track of all API requests and responses with comprehensive logs.
        </p>
      </div>

      <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <span className="text-2xl">🌐</span>
        <h2 className="mt-2 font-bold">Browse community APIs</h2>
        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Explore and use APIs created by other users in our community.
        </p>
      </div>
    </div>
  );
};

export default SectionGrid;

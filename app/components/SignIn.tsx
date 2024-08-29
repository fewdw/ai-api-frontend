"use client";

import { LOGIN_API_ROUTES } from "../utils/ApiRoutes";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-2">
          <span className="text-black">Cloud</span>
          <span className="text-blue-500">API</span>
        </h1>
        <p className="text-gray-500 mb-6 mx-20">Sign in to continue</p>
        <a
          href={LOGIN_API_ROUTES}
          className="flex items-center justify-center w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
        >
          <p className="mr-2" />
          Sign In with GitHub
        </a>
      </div>
    </div>
  );
}

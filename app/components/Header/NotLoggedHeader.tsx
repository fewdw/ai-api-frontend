import Link from "next/link";
import React from "react";

const NotLoggedHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <Link href="/">
        <div className="text-2xl font-bold text-black">
          Cloud<span className="text-blue-500">API</span>
        </div>
      </Link>
      <a
        href="http://localhost:8080/oauth2/authorization/github"
        className="px-4 py-2 bg-black text-white rounded-md text-base"
      >
        Sign In with GitHub
      </a>
    </div>
  );
};

export default NotLoggedHeader;

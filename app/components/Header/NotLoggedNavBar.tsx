import Link from "next/link";
import React from "react";

const NotLoggedNavBar = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="sm:flex sm:gap-4">
        <Link
          className="rounded-md bg-blue-500 hover:bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow flex items-center gap-2"
          href="http://localhost:8080/oauth2/authorization/github"
        >
          Login
          <img
            src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF"
            alt="GitHub Icon"
            className="h-4 w-4 -ml-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotLoggedNavBar;

import Link from "next/link";
import React, { useState } from "react";

interface LoggedNavBarProps {
  profilePic: string;
  username: string;
  premium: boolean; // Add premium field
}

const LoggedNavBar: React.FC<LoggedNavBarProps> = ({
  profilePic,
  username,
  premium,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="relative flex items-center">
      <div className="relative">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
          <span className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700">
            {username}
          </span>

          <button
            onClick={handleMenuToggle}
            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <Link
                href="/api"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                My APIs
              </Link>

              <Link
                href="/public"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Public APIs
              </Link>
            </div>

            <div className="p-2">
              <form
                method="POST"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Logout
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <img
        src={profilePic}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover mr-3 ml-4"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/path/to/default/image.jpg"; // Provide a default image in case of error
        }}
      />
      {!premium && (
        <Link
          href="/pro"
          className="ml-4 rounded-md bg-green-500 hover:bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow"
        >
          Go Pro
        </Link>
      )}
    </div>
  );
};

export default LoggedNavBar;

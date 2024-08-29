import Link from "next/link";
import React, { useState } from "react";
import { LOGOUT_API_ROUTE } from "@/app/utils/ApiRoutes";

interface LoggedHeaderProps {
  username: string;
  profilePic: string;
}

const LoggedHeader: React.FC<LoggedHeaderProps> = ({
  username,
  profilePic,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <Link href="/">
        <div className="text-2xl font-bold text-black">
          Cloud<span className=" text-blue-500">API</span>
        </div>
      </Link>
      <div className="relative">
        <img
          src={profilePic}
          alt={`${username}'s profile`}
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="apis">APIs</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href={LOGOUT_API_ROUTE}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoggedHeader;

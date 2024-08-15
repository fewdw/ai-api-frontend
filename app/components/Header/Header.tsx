'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoggedNavBar from "./LoggedNavBar";
import NotLoggedNavBar from "./NotLoggedNavBar";

const Header = () => {
  const [userInfo, setUserInfo] = useState<{ profilePic: string; username: string } | null>(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user/info", {
          method: 'GET',
          credentials: 'include', // Include cookies with the request
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              href="/"
              className="text-slate-950 transition hover:text-slate-500"
            >
              Cloud-API
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {loading ? (
              <div className="text-slate-950"></div>
            ) : userInfo ? (
              <LoggedNavBar profilePic={userInfo.profilePic} username={userInfo.username} />
            ) : (
              <NotLoggedNavBar />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

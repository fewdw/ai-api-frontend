"use client";
import React, { useEffect, useState, useCallback } from "react";
import { LOGIN_API_ROUTES, LOGIN_INFO_API_ROUTE } from "../utils/ApiRoutes";
import Link from "next/link";

const HeroButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkLoginStatus = useCallback(async () => {
    try {
      const response = await fetch(LOGIN_INFO_API_ROUTE, {
        credentials: "include",
      });
      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Link
        href={isLoggedIn ? "/apis" : LOGIN_API_ROUTES}
        className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        {isLoggedIn ? "View APIs" : "Register"}
      </Link>
    </div>
  );
};

export default HeroButton;

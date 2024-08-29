"use client";
import React, { useEffect, useState } from "react";
import LoggedHeader from "./LoggedHeader";
import NotLoggedHeader from "./NotLoggedHeader";
import { LOGIN_INFO_API_ROUTE } from "../../utils/ApiRoutes";

const Header = () => {
  const [userInfo, setUserInfo] = useState<{
    username: string;
    profilePic: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(LOGIN_INFO_API_ROUTE, {
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Not logged in");
        }
      })
      .then((data) => {
        setUserInfo(data);
        setIsLoading(false);
      })
      .catch(() => {
        setUserInfo(null);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return null;
  }

  return userInfo ? (
    <LoggedHeader
      username={userInfo.username}
      profilePic={userInfo.profilePic}
    />
  ) : (
    <NotLoggedHeader />
  );
};

export default Header;

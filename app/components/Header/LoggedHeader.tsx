import React from "react";

interface LoggedHeaderProps {
  username: string;
  profilePic: string;
}

const LoggedHeader: React.FC<LoggedHeaderProps> = ({
  username,
  profilePic,
}) => {
  return (
    <div>
      <img
        src={profilePic}
        alt={`${username}'s profile`}
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <span>Welcome, {username}!</span>
    </div>
  );
};

export default LoggedHeader;

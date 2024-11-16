import React from "react";

const layout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div style={{ display: "flex" }}>
      {children}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{users}</div>
        <div>{revenue}</div>
      </div>
      <div>{notifications}</div>
    </div>
  ) : (
    login
  );
};

export default layout;

import React from "react";

const layout = ({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <div style={{ display: "flex" }}>
      {children}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{users}</div>
        <div>{revenue}</div>
      </div>
      <div>{notifications}</div>
    </div>
  );
};

export default layout;

import React from "react";

export default function productLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Fearture products</h2>
    </>
  );
}

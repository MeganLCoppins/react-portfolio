import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: "100%", padding: `0 `, overflowX: "hidden" }}>
      {children}
    </div>
  );
}

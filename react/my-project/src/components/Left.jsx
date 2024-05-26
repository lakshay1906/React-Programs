import React from "react";
import { Outlet } from "react-router-dom";

function Left() {
  return (
    <>
      <div id="left" className="w-1/2 h-screen bg-blue-700">
        <Outlet />
      </div>
    </>
  );
}

export default Left;

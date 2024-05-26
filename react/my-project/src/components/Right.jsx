import React from "react";
import { Outlet } from "react-router-dom";

function Right() {
  return (
    <>
      <div id="right" className="w-1/2 h-screen bg-green-700">
        <Outlet />
      </div>
    </>
  );
}

export default Right;

import Navbar from "./Component/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[5.7rem]">
        <Outlet />
      </div>
    </>
  );
}

export default App;

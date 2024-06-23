import { useSelector } from "react-redux";
import Navbar from "./Component/Navbar";
import { Outlet, useSearchParams } from "react-router-dom";

function App() {
  const notificationTimer = useSelector(
    (state) => state.productData.notificationTimer
  );
  const notification = useSelector((state) => state.productData.notification);

  return (
    <>
      <Navbar />
      <div className="mt-[5.7rem] relative">
        <Outlet />
        {notificationTimer && (
          <div className="absolute top-10 left-[35%] bg-red-600 text-white font-semibold px-4 py-1 rounded-md text-lg">
            The item is already in the cart....!!
          </div>
        )}
        {/* <div className="absolute top-10 left-[35%] bg-red-600 text-white font-semibold px-4 py-1 rounded-md text-lg">
          The item is already in the cart....!!
        </div>
        <div className="absolute top-10 left-[32%] bg-green-600 text-white font-semibold px-4 py-1 rounded-md text-lg">
          Item added successfully in the cart....!!
        </div> */}
      </div>
    </>
  );
}

export default App;

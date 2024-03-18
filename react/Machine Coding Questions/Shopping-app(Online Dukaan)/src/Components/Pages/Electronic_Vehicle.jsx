import React, { useContext } from "react";
import { dataContext } from "../../Contexts/DataContext";

const Electronic_Vehicle = () => {
  const value = useContext(dataContext);
  console.log(value.data);
  console.log(value.a);
  return <div className="text-3xl">Electronic_Vehicle</div>;
};

export default Electronic_Vehicle;

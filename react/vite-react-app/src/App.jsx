import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeQualified,
  setEmpData,
  setQualifiedEmp,
} from "./Features/EmpReducer";
import { employees } from "./Data/Data";

function App() {
  const dispatch = useDispatch();
  const empData = useSelector((state) => state.empData);
  const qualifiedEmp = useSelector((state) => state.qualified);

  useEffect(() => {
    dispatch(setEmpData(employees));
  });

  return (
    <div className="flex gap-40">
      <ul className="flex flex-col gap-2 m-5 border border-black p-3">
        <h1>All Employees</h1>
        {empData.map((ele) => (
          <li key={ele.id} id={ele.id} className="flex gap-2">
            <span>{ele.name}</span>
            <button
              className="bg-gray-300 px-2 py-1"
              onClick={() => dispatch(setQualifiedEmp(ele))}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
      <div className="border border-black m-5 p-3">
        <ul className="flex flex-col gap-2">
          <h1>Qualified Employees</h1>
          {qualifiedEmp.map((ele) => (
            <li key={ele.id} id={ele.id} className="flex gap-4">
              <span>{ele.name}</span>
              <button
                className="bg-gray-300 px-2 py-1"
                onClick={() => dispatch(removeQualified(ele.id))}
              >
                Delete
              </button>
              <div className="text-lg flex gap-1">
                <span>⬆️</span>
                <span>{ele.age}</span>
                <span>⬇️</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

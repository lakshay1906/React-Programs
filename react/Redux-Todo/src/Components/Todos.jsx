import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/Todo/todoSlice";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="text-xl px-2 py-5 overflow-y-auto w-[calc(100vw-2rem)]">
      {todos.length !== 0 && (
        <ul className="bg-slate-700 flex flex-col gap-2 w-full p-2 rounded overflow-y-auto">
          {todos.map((ele) => (
            <li
              key={ele.id}
              className="bg-gray-500 px-2 py-1 overflow-x-auto flex items-center justify-between rounded"
            >
              {ele.text}
              <div className="flex gap-2 items-center justify-center">
                <FaPencil size={"1.1rem"} className=" cursor-pointer" />
                <MdDelete
                  className="cursor-pointer"
                  onClick={() => dispatch(removeTodo(ele.id))}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;

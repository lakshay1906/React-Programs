import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <div className="text-xl mt-3 w-full flex justify-center">
      <form className="flex gap-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter the task...."
          className="px-2 py-1 text-black rounded w-full "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <input
          type="submit"
          value="Add"
          className="w-fit px-2 py-1 bg-white text-black rounded"
        />
      </form>
    </div>
  );
}

export default AddTodo;

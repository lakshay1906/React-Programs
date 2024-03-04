import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h1 className="text-4xl font-semibold">Radhe Radhe</h1>
      <form
        id="form-container"
        className="flex flex-col border border-black justify-center items-center gap-4 m-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="h-12 p-2 text-xl border border-black bg-gray-800"
          placeholder="Username"
          {...register("username", {
            required: true,
            minLength: { value: 3, message: "The username is too short" },
            maxLength: {
              value: 15,
              message: "Username cann't exceed more than 15",
            },
          })}
        />
        {errors.username && <div>{errors.username.message}</div>}
        <input
          type="password"
          className="h-12 p-2 text-xl border border-black bg-gray-800"
          placeholder="password"
          {...register("password", {
            required: true,
            minLength: { value: 8, message: "Your password is too short" },
            maxLength: { value: 20, message: "Your password is too long" },
          })}
        />
        <input
          type="submit"
          className="border border-black text-xl px-1 py-px"
        />
      </form>
    </>
  );
}

export default App;

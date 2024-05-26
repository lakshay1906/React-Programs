import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  console.log("Radhe Radhe");
  return (
    <div className="flex flex-col items-center w-full max-h-screen">
      <h1 className="text-[2.6rem] font-bold mt-10 underline underline-offset-4 w-full text-center">
        Todo Application
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

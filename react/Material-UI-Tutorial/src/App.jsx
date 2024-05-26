import { useState } from "react";
import { Container } from "@mui/material";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;

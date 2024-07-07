import { useState } from "react";
import { Navbar } from "./Navbar";
import "./styles.css";
import { Posts } from "./Posts";

function App() {
  return (
    <>
      <Navbar />
      <Posts />
    </>
  );
}

export default App;

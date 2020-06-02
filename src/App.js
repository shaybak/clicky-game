import React from "react";
import Picture from "./components/Picture";
// import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import "./App.css";

function App() {
  return (
    <Picture pictures={pictures} />
    // <Picture name={pictures[0].name} image={pictures[0].image} />
  );
}

export default App;

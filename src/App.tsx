// import { Suspense } from "react";
import "./App.css";
import { userCounter } from "./store";

function App() {
  let count=userCounter(state=>state.counter)
  let inc=userCounter(state=>state.inc)
  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={inc}>+</button>
    </>
  );
}

export default App;

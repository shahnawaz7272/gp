// import { Suspense } from "react";
import "./App.css";
import ResP from "./components/ResP";
import { recpCounter } from "./store";


function App() {
    const recps = recpCounter((state) => state.recps);
  
  return (
    <>
    <ResP/>
      <div className="flex flex-col gap-4">
        {recps.map((recp, index) => (
          <div key={index} >
            <h1>{recp.title}</h1>
            <h1>{recp.ingridients}</h1>
            <h1>{recp.instruction}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

import { useRef, useState } from "react";

import "./App.css";
import Child from "./child";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const increment = () => {
    countRef.current += 1;

    setCount((count) => count + 1);
    console.log(countRef.current);
  };
  return (
    <>
      <h1>Global counter</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <p>count is {countRef.current}</p>
        <h1>Child</h1>
        <Child ref={countRef} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

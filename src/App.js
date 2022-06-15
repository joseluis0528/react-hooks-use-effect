import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    // side effect function
    // first argument: callback function
    document.title = text
    // second argument: dependencies array
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, [])

  console.log("Component rendering");

  return (
  <div>
    <button onClick={() => setCount((count) => count + 1)}>I've been clicked {count} times</button>
    <input type="text" placeholder="Type away..." onChange={(e) => setText(e.target.value)}/>
  </div>
  )
}

export default App;
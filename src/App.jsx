import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [greeting, setGreeting] = useState("Greeting Message");

  const handleButtonClick = (newGreeting) => {
    setGreeting(newGreeting);
  };

  return (
    <div>
      <div className="greeting-container">{greeting}</div>
      <button onClick={() => handleButtonClick("สวัสดี!")}>สวัสดี!</button>
      <button onClick={() => handleButtonClick("Hi!")}>Hi!</button>
      <button onClick={() => handleButtonClick("你好!")}>你好!</button>
    </div>
  );
};

export default App;

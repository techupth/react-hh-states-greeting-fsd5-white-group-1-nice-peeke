import { useState } from "react";

export function GreetingMessage() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  return (
    <>
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button
          onClick={(text) => {
            setGreetingMessage((text = "สวัสดี!"));
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={(text) => {
            setGreetingMessage((text = "Hi!"));
          }}
        >
          Hi!
        </button>
        <button
          onClick={(text) => {
            setGreetingMessage((text = "你好!"));
          }}
        >
          你好!
        </button>
      </div>
    </>
  );
}

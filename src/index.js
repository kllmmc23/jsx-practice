import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

const App = () => {
  const buttonText = 'Click Me!';
  return (
    <div>
      <label className="label" for=" name">
        Enter name{" "}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};
ReactDOM.render(<App />, rootElement);

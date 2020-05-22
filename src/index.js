import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const App = () => {
  const getButtonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  return (
    <div>
      <label className="label" for=" name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText.text}
      </button>
    </div>
  );
};
ReactDOM.render(<App />, rootElement);

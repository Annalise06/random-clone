import React from "react";
import Stamp from "./Stamp";

const Text = () => {
  const text = "Hello World"; // Set the text you want to display
  return (
    <div className="App">
      <h1>Animated Circle Text</h1>
      <Stamp text={text} />
    </div>
  );
};

export default Text;

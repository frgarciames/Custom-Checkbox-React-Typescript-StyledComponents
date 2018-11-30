import * as React from "react";
import { render } from "react-dom";
import Button from "./Button";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Button />
  </div>
);

render(<App />, document.getElementById("root"));

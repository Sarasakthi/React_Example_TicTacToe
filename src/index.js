import React, { StrictMode } from "react"
//import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom/client"
import "./styles.css";

import App from "./App";

/*const myroot = createRoot(document.getElementById("root"))
myroot.render(
  <App />
)*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />)

/*const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/

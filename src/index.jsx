import React from "react";
import ReactDOM from "react-dom";
import { ExpenseProvider } from "./context/context";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <ExpenseProvider>
    <App />
  </ExpenseProvider>,
  document.getElementById("root")
);

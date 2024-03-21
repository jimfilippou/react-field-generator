import ReactDOM from "react-dom/client";
import { FieldGenerator } from "../";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FieldGenerator fieldKey="name" />
  </React.StrictMode>
);

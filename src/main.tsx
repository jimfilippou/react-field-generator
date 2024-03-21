import ReactDOM from "react-dom/client";
import React from "react";
import { FieldGeneratorProvider } from "../lib/provider";
import { FieldGenerator } from "../lib/field-generator";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FieldGeneratorProvider library={"react-hook-form"}>
      <FieldGenerator fieldKey="name" />
    </FieldGeneratorProvider>
  </React.StrictMode>
);

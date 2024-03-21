import { FieldGeneratorContext } from "./context";
import { useContext } from "react";

interface FieldGeneratorProps {
  fieldKey: string;
}

export function FieldGenerator(props: FieldGeneratorProps) {
  const { library } = useContext(FieldGeneratorContext);
  console.log(library);
  switch (props.fieldKey) {
    case "name":
      return <input type="text" />;
    case "email":
      return <input type="email" />;
    case "password":
      return <input type="password" />;
    default:
      return <input type="text" />;
  }
}

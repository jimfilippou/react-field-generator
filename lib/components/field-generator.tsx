interface FieldGeneratorProps {
  fieldKey: string;
}

export function FieldGenerator(props: FieldGeneratorProps) {
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

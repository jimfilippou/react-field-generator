import React from "react";
import { FieldGeneratorProviderProps } from "./provider";

/**
 * We are reusing the FieldGeneratorProviderProps from the provider file
 * to avoid duplication of types. However, we are omitting the children.
 */
type FieldGeneratorContextType = Omit<FieldGeneratorProviderProps, "children">;

/**
 * We are creating a context that will be used by the FieldGenerator component.
 * The context will be used to pass global state to the FieldGenerator component.
 */
export const FieldGeneratorContext =
  React.createContext<FieldGeneratorContextType>(
    {} as FieldGeneratorContextType
  );

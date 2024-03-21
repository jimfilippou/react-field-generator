import { FieldGeneratorContext } from "./context";
import { acceptedLibraries } from "./constants";
import React from "react";

export interface FieldGeneratorProviderProps {
  library: (typeof acceptedLibraries)[number];
  children: React.ReactNode;
}

export function FieldGeneratorProvider({
  library,
  children,
}: FieldGeneratorProviderProps) {
  if (!acceptedLibraries.includes(library)) {
    console.warn(`Invalid library: ${library}`);
    return null;
  }
  return (
    <FieldGeneratorContext.Provider value={{ library }}>
      {children}
    </FieldGeneratorContext.Provider>
  );
}

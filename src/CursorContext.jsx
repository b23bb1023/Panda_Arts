import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursorType, setCursorType] = useState("default");
  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);

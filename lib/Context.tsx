"use client";

import { createContext, useContext, useState } from "react";
import { Look } from "./types";

interface SavedContextType {
  savedLooks: Look[];
  saveLook: (look: Look) => void;
  removeLook: (id: number) => void;
}

const SavedContext = createContext<SavedContextType | null>(null);

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [savedLooks, setSavedLooks] = useState<Look[]>([]);

  // saveLook functioon
  const saveLook = (look: Look) => {
    setSavedLooks([...savedLooks, look]);
  };

  // your removeLook function goes here
const removeLook =(id: number) =>{
    setSavedLooks(savedLooks.filter((look) => look.id !== id ))
}

  return (
    <SavedContext.Provider value={{ savedLooks, saveLook, removeLook }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const context = useContext(SavedContext);
  if (!context) throw new Error("useSaved must be used within SavedProvider");
  return context;
}

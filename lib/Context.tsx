"use client"

import { createContext, useContext, useState} from "react"
import { Look } from "./types"
//  what the context contains
interface SavedContextType{
    savedLooks: Look[]
    saveLook: (look: Look) => void
    removeLook: (id: number) => void
}

//  context

const SavedContext = createContext<SavedContextType | null> (null)

//  provider
export function SavedProvider ({ children }: {children: React.ReactNode}) {
    
}
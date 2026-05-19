"use client";

import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { getLooks } from "../lib/looks"
import Hero from "../components/Hero"
import FilterBar from "../components/FilterBar";

export default function Page() {
  const { data: looks, isLoading, isError } = useQuery({
    queryKey: ["Looks"],
    queryFn: getLooks
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Something went wrong</div>
    
  
  return(
    <main>
    <Hero/>
    <FilterBar/>
    </main>
  )
}
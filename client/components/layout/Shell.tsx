"use client"

import { useState, type ReactNode } from "react"

import { Header } from "./Header"

export const Shell = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="flex min-h-dvh flex-col">
      <Header menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      <div inert={menuOpen} className="column flex flex-1 flex-col">
        {children}
      </div>
    </div>
  )
}

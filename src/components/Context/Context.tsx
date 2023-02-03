import React, { createContext } from "react"

export const OverlayContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null)

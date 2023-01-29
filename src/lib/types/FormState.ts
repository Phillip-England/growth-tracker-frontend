import React from "react"

export interface FormState {
  setError: React.Dispatch<React.SetStateAction<string>>
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>
}
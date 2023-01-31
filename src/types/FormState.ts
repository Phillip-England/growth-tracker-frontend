import React from "react"

export interface FormState {
  setError: React.Dispatch<React.SetStateAction<string>>
  setLoadingScreen: React.Dispatch<React.SetStateAction<boolean>>
}

import { createContext } from "react"
import { User } from "../../types/User"

export const UserContext = createContext<User | null>(null)
export const LoadingScreenContext = createContext<any | null>(null)
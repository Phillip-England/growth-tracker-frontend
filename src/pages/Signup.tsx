import { useState, useContext } from "react"

import { SignupForm } from "../components/forms/SignupForm"
import { Overlay } from "../components/loading/Overlay"
import { MainLoader } from "../components/loading/Loaders"

export const Signup = () => {

  return (
    <>
      <SignupForm />
    </>
  )
}
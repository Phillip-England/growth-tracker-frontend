import { useState, useContext } from "react"

import { SignupForm } from "../components/forms/SignupForm"
import { Overlay } from "../components/misc/Overlay"
import { MainLoader } from "../components/misc/Loaders"
import { OverlayContext } from "../components/misc/context"

export const Signup = () => {

  return (
    <>
      <SignupForm />
    </>
  )
}
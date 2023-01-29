import { useState } from "react"

import { SignupForm } from "../components/forms/SignupForm"
import { Overlay } from "../components/Overlay"
import { MainLoader } from "../components/Loaders"

export const Signup = () => {

  const [overlay, setOverlay] = useState<boolean | null>(false)

  return (
    <>
      {overlay ? (
        <>
          <Overlay />
          <MainLoader />
        </>
      ) : (
        null
      )}
      <SignupForm setOverlay={setOverlay} />
    </>
  )
}
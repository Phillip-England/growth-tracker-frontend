interface NavOverlayProps {
  setNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavOverlay = ({ setNav }: NavOverlayProps) => {
  return (
    <>
      <div
        className="fixed top-0 z-10 h-full w-full bg-black opacity-20"
        onClick={() => {
          setNav(false)
        }}
      ></div>
    </>
  )
}


import { H2 } from "../Text/Text"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

interface NavProps {
  title?: string
}


import './Navbar.css'
export const Navbar = ({ title }: NavProps) => {
  return (
    <nav className={'p-4 nav-grid'}>
      <FontAwesomeIcon icon={faBars} className={'self-center'} />
      <H2 text={title} className='justify-self-end'></H2>
    </nav>
  )
}
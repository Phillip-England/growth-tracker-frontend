
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../components/context/context"
import { P1 } from "../../components/text/body"
import { H2 } from "../../components/text/headers"
import { LinkButton } from "../../components/buttons/LinkButton"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import './Home.css'
export const Home = () => {

  const user = useContext(UserContext)

  return (
    <div className="page-grid">
      <div className="location-grid">
        <H2 className="location-title">Locations</H2>
        <LinkButton className="location-button">
          <Link to={'/app/locations'}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Link>
        </LinkButton>
        <P1 className="location-items">You currently have no locations listed for your account.</P1>
      </div>
    </div>
  )
}
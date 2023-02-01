import { useContext, useEffect, useState } from "react"
import { UserContext } from "../components/context/context"
import { P1 } from "../components/text/body"
import { H2 } from "../components/text/headers"
import { LinkButton } from "../components/buttons/LinkButton"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const HomeGrid = styled.div`
  display:grid;
`

const LocationsGrid = styled.div`
  display: grid;
  padding: var(--space-xs);
  grid-template-columns: 1fr 1fr;
  grid-template-areas: '
    title link
  '
`


export const Home = () => {

  const user = useContext(UserContext)

  return (
    <HomeGrid>

      <LocationsGrid>
        <H2>Locations</H2>
        <LinkButton>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </LinkButton>
        <P1>You currently have no locations listed for your account.</P1>
      </LocationsGrid>
    </HomeGrid>
  )
}
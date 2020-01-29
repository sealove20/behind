import React from "react"

import { Container, GetStartedButton } from "./styles"

import logo from "../../images/juno.svg"

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <GetStartedButton>Comece Agora</GetStartedButton>
    </Container>
  )
}

export default Header

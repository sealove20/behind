import React from "react"
import logo from "../../images/juno.svg"
import { Container, GetStartedButton } from "./styles"

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" style={{ paddingTop: 20 }} />
      <GetStartedButton>Comece Agora</GetStartedButton>
    </Container>
  )
}

export default Header

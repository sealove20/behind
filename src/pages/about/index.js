import React from "react"
import logo from "../../images/juno.svg"

import { Header, GetStartedButton } from "./styles"

function About() {
  return (
    <Header>
      <img src={logo} alt="Logo" style={{ paddingTop: 20 }} />
      <GetStartedButton>Comece Agora</GetStartedButton>
    </Header>
  )
}

export default About

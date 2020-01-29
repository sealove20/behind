import React from "react"
import styled from "styled-components"

import logo from "../images/juno.svg"

import GetStartedButton from "./GetStartedButton"

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 63px;
  background: ${props => props.theme.primary};
`

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <GetStartedButton />
    </Container>
  )
}

export default Header

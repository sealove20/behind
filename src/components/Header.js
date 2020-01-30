import React from "react"
import styled from "styled-components"

import logo from "../images/behindLogo.png"

import GetStartedButton from "./GetStartedButton"

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 63px;
  background: ${props => props.theme.primary};

  img {
    width: 88px;
    height: 45px;
  }
`

function Header() {
  return (
    <Container>
      <img src={logo} alt="Bussines Logo" />
      <GetStartedButton />
    </Container>
  )
}

export default Header

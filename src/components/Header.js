import React from "react"

import styled from "styled-components"

import logo from "../images/juno.svg"

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 63px;
  background: ${props => props.theme.primary};
`
const GetStartedButton = styled.button`
  width: 150px;
  height: 40px;
  background: #3ecf0e;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: 0px;
`

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <GetStartedButton>Comece Agora</GetStartedButton>
    </Container>
  )
}

export default Header

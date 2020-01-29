import React from "react"
import styled from "styled-components"

const Container = styled.button`
  width: 150px;
  height: 40px;
  background: ${props => props.theme.buttonColor};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: 0px;

  &:hover {
    background: #7ecf0e;
  }
`

function GetStartedButton() {
  return <Container>Comece Agora</Container>
}

export default GetStartedButton

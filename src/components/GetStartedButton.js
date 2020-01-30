import React from "react"
import styled, { keyframes } from "styled-components"

const shine = keyframes`
  10% {
    box-shadow: 3px 3px 15px 2px #666;
  }
  50% {
    box-shadow: 5px 3px 25px 10px #666;
  }
  100% {
    box-shadow: 3px 3px 15px 2px #666;
  }
}
`

const Container = styled.a`
  animation: ${shine} 0.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 3px 3px 15px 2px #666;
  width: 150px;
  height: 40px;
  background: ${props => props.theme.buttonColor};
  color: ${props => props.theme.secondaryFontColor};
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: 0px;

  &:hover {
    background: #0061b1;
  }
`

function GetStartedButton() {
  return (
    <Container
      href="https://matheushenrique484953.typeform.com/to/vAkglf"
      target="_blank"
    >
      Comece Agora
    </Container>
  )
}

export default GetStartedButton

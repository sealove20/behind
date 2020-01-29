import React from "react"

import styled from "styled-components"

const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background: ${props => props.theme.primary};

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.secondaryFontColor};
  }

  #policy {
    text-align: center;
    font-size: 14px;
    word-wrap: break-word;
    width: 300px;
    margin: 20px 0;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding: 50px 0;
  }
`

function Footer() {
  return (
    <Container>
      <p>Juno.com.br</p>
      <p id="policy">
        2020 Juno. Todos os direitos reservados.
        <br /> Juno é uma plataforma de BoletoBancário.com
      </p>
      <p>#tamojuno</p>
    </Container>
  )
}

export default Footer

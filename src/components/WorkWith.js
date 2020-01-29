import React from "react"
import styled from "styled-components"

import cobrancas from "../images/cobrancas-recorrentes.png"

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background: #fff;
  margin-top: 50px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 40px;

    img {
      width: 80%;
      order: 1;
    }
  }
`
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13%;

  h2 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 32px;
    word-wrap: break-word;
    color: ${props => props.theme.primary};
    width: 350px;
    margin-bottom: 20px;
  }

  p {
    font-family: Roboto;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.4px;
    word-wrap: break-word;
    color: #666;
    width: 317px;
  }

  @media only screen and (max-width: 600px) {
    order: 2;
    margin-left: 0;

    h2 {
      width: 295px;
      margin: 0;
    }

    p {
      width: 280px;
    }
  }
`

function WorkWith() {
  return (
    <Container>
      <Wraper>
        <h2>Emita cobranças recorrentes</h2>
        <p>
          Com a Juno, você pode emitir cobranças recorrentes com lembretes que
          ajudam a diminuir a inadimplência dos seus clientes.
        </p>
      </Wraper>

      <img src={cobrancas} alt="cobranças" />
    </Container>
  )
}

export default WorkWith

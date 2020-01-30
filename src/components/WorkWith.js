import React from "react"
import styled from "styled-components"

import cobrancas from "../images/cobrancas-recorrentes.png"

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 50px 0;
  background: ${props => props.theme.background};

  @media only screen and (max-width: 1200px) {
    img {
      width: 50%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 40px;

    img {
      width: 70%;
      height: 100%;
      order: 1;
    }
  }
`
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13%;

  h2 {
    font-weight: bold;
    font-size: 32px;
    word-wrap: break-word;
    margin-bottom: 20px;
    width: 350px;
    color: ${props => props.theme.primary};
  }

  p {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.4px;
    word-wrap: break-word;
    width: 317px;
    color: ${props => props.theme.primaryFontColor};
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
        <h2>Pareie com vários sapatos</h2>
        <p>
          Com a Behind, você pode emitir ondas cerebrais para diversos sapatos
          ao mesmo tempo em real time.
        </p>
      </Wraper>

      <img src={cobrancas} alt="cobranças" />
    </Container>
  )
}

export default WorkWith

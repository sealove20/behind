import React from "react"
import styled from "styled-components"

import Panel from "./Panel"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  background: ${props => props.theme.backgroundColorAbout};

  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    width: 280px;
    margin-bottom: 40px;
    margin-left: 22%;
    color: ${props => props.theme.primaryFontColor};
  }

  @media only screen and (max-width: 600px) {
    padding: 45px 0;
    height: auto;

    h2 {
      margin-left: 5%;
    }
  }
`

const Wraper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0px;
  }
`

function About() {
  return (
    <Container>
      <h2>Como a Juno funciona?</h2>
      <Wraper>
        <Panel
          title={"1."}
          text={
            "Você se cadastra na Juno, emite cobranças e envia para seus clientes. É rápido e não precisa ter carteira de cobrança em nenhum banco."
          }
        />
        <Panel
          title={"2."}
          text={
            " Seu cliente recebe a cobrança da maneira que você preferir e paga. A Juno cuida da conciliação bancária e da segurança das suas transações."
          }
        />
        <Panel
          title={"3."}
          text={
            " O dinheiro cai na sua conta Juno e você pode usá-lo com seu cartão Juno, pagar contas ou transferir para uma conta bancária."
          }
        />
      </Wraper>
    </Container>
  )
}

export default About

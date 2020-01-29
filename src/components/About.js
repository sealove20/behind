import React from "react"
import styled from "styled-components"

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
    color: ${props => props.theme.primaryFontColor};
    width: 280px;
    margin-bottom: 40px;
    margin-left: 22%;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    padding: 45px 0;

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

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  &:nth-of-type(n + 2) {
    margin-left: 100px;
  }

  @media only screen and (max-width: 600px) {
    &:nth-of-type(n + 2) {
      margin-left: 0px;
    }
  }
`

const Title = styled.div`
  font-weight: 900;
  font-size: 24px;
  color: ${props => props.theme.secondary};
  margin-right: 10px;
`

const Text = styled.p`
  width: 279px;
  word-wrap: break-word;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 25px;
  text-align: left;
  color: ${props => props.theme.primaryFontColor};
`

function About() {
  return (
    <Container>
      <h2>Como a Juno funciona?</h2>
      <Wraper>
        <Panel>
          <Title>1.</Title>
          <Text>
            Você se cadastra na Juno, emite cobranças e envia para seus
            clientes. É rápido e não precisa ter carteira de cobrança em nenhum
            banco.
          </Text>
        </Panel>
        <Panel>
          <Title>2.</Title>
          <Text>
            Seu cliente recebe a cobrança da maneira que você preferir e paga. A
            Juno cuida da conciliação bancária e da segurança das suas
            transações.
          </Text>
        </Panel>
        <Panel>
          <Title>3.</Title>
          <Text>
            O dinheiro cai na sua conta Juno e você pode usá-lo com seu cartão
            Juno, pagar contas ou transferir para uma conta bancária.
          </Text>
        </Panel>
      </Wraper>
    </Container>
  )
}

export default About

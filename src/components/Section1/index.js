import React from "react"

import { Container, Panel, Text, Title, Wraper } from "./styles"

function Section1() {
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

export default Section1

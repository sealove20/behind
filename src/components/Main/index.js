import React from "react"

import { Container, Card, GetStartedButton } from "./styles"

function Main() {
  return (
    <>
      <Container>
        <Card>
          <h1>Profissionalize seu negócio recebendo pagamentos por boleto</h1>
          <p>
            Na Juno você não precisa ter conta jurídica e nem carteira de
            cobrança junto ao banco para emitir boletos. Basta seu CPF. Simples
            assim!
          </p>
          <GetStartedButton>Comece Agora</GetStartedButton>
        </Card>
      </Container>
    </>
  )
}

export default Main

import React from "react"
import cobrancas from "../../images/cobrancas-recorrentes.png"

import { Container, Wraper } from "./styles"

function Section2() {
  return (
    <Container>
      <Wraper>
        <h2>Emita cobranças recorrentes</h2>
        <p>
          Com a Juno, você pode emitir cobranças recorrentes com lembretes que
          ajudam a diminuir a inadimplência dos seus clientes.
        </p>
      </Wraper>

      <img src={cobrancas} />
    </Container>
  )
}

export default Section2

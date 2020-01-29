import React from "react"

import { Container, Card, GetStartedButton, Wraper } from "./styles"

import cta from "../../images/cta.png"

function Section3() {
  return (
    <Container>
      <Wraper>
        <Card>
          <h2>Gostou?</h2>
          <p>Fazer seu cadastro na Juno é grátis e não leva nem 5 minutos.</p>
          <GetStartedButton>Comece Agora</GetStartedButton>
        </Card>
      </Wraper>
      <img src={cta} alt="cta" style={{ width: "50%" }} />
    </Container>
  )
}

export default Section3

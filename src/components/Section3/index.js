import React from "react"

import { Container, Card, GetStartedButton, Wraper, ImgBg } from "./styles"

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
      <ImgBg />
    </Container>
  )
}

export default Section3

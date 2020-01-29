import React from "react"
import styled from "styled-components"

import cta from "../images/cta.png"

const Container = styled.section`
  display: flex;
  height: 400px;
  background: #fff;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #00155f;

  h2 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    color: #fff;
    text-align: left;
  }

  p {
    margin: 20px 0;
    font-family: Roboto;
    font-size: 18px;
    word-wrap: break-word;
    line-height: 25px;
    letter-spacing: 0.4px;
    width: 287px;
    color: #fff;
  }
`

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background: #00155f;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 330px;
  }
`

const GetStartedButton = styled.button`
  width: 150px;
  height: 40px;
  background: #3ecf0e;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: 0px;
`

const ImgBg = styled.div`
  background-image: url(${cta});
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 390px;
    background-position: 35%;
  }
`

function GetStarted() {
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

export default GetStarted
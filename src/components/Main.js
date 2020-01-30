import React from "react"
import styled from "styled-components"

import backgroundImage from "../images/banner-bg.png"

import GetStartedButton from "./GetStartedButton"

const Container = styled.main`
  display: flex;
  align-items: center;
  background-image: url(${backgroundImage});
  height: 537px;

  @media only screen and (max-width: 600px) {
    background-position: 70%;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22%;

  h1 {
    font-size: 44px;
    line-height: 48px;
    word-wrap: break-word;
    width: 476px;
    color: ${props => props.theme.secondaryFontColor};
  }

  p {
    margin: 20px 0;
    font-size: 18px;
    line-height: 25px;
    word-wrap: break-word;
    width: 523px;
    color: ${props => props.theme.secondaryFontColor};
  }

  @media only screen and (max-width: 600px) {
    margin-left: 15px;

    h1 {
      width: 311px;
      font-size: 40px;
      line-height: 40px;
      margin: 0;
    }

    p {
      width: 311px;
      text-align: left;
    }
  }
`

function Main() {
  return (
    <Container>
      <Card>
        <h1>A segurança de sempre encontrar o seu sapato pelo celular</h1>
        <p>
          Na Behind você não precisa ter medo de deixar seus sapatos em qualquer
          lugar. Bastam suas ondas cognitivas. Simples assim!
        </p>
        <GetStartedButton />
      </Card>
    </Container>
  )
}

export default Main

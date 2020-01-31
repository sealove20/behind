import React from "react"
import styled, { keyframes } from "styled-components"

import backgroundImage from "../images/banner-bg.webp"

import GetStartedButton from "./GetStartedButton"

const slidein = keyframes`
  from {
    margin-left: 100%;
    width: 200%;
  }

  to {
    margin-left: 0%;
    width: 537px;
  }
`

const slideinMobile = keyframes`
  from {
    margin-left: 100%;
    width: 200%;
  }

  to {
    margin-left: 0%;
    width: 311px;
  }
`

const Container = styled.main`
  display: flex;
  align-items: center;
  background-image: url(${backgroundImage});
  height: 537px;
  background-position: 70%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22%;

  h1 {
    animation: ${slidein} 2s alternate;
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
      animation: ${slideinMobile} 2s alternate;
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

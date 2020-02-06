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
    color: ${props => props.theme.primaryFontColor};
  }

  @media only screen and (max-width: 950px) {
    padding: 45px 0;
    height: auto;
  }
`

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1160px;
  margin: 0 auto;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0px;
  }
`

const PanelWraper = styled.div`
  display: flex;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0px;
  }
`

function About() {
  return (
    <Container>
      <Wraper>
        <h2>Como a Behind funciona?</h2>
        <PanelWraper>
          <Panel
            title={"1."}
            text={
              "Você se cadastra na Behind, e faz uma conexão neural com o seu sapato. É rápido e não precisa de nada além do seu celular."
            }
          />
          <Panel
            title={"2."}
            text={
              "O seu sapato recebe as ondas cerebrais e instantaneamente faz uma conexão neural. Essa conexão só pode ser quebrada por um poderoso jutsu."
            }
          />
          <Panel
            title={"3."}
            text={
              "Todo caminho tomado pelo seu sapato será monitorado pelo app da Behind. Monitoramos até mesmo em outras galáxias. Don't Panic!"
            }
          />
        </PanelWraper>
      </Wraper>
    </Container>
  )
}

export default About

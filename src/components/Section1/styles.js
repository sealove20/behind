import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  background: #f1f5fb;

  h2 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    color: #666;
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

export const Wraper = styled.div`
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

export const Panel = styled.div`
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

export const Title = styled.div`
  font-weight: 900;
  font-family: Roboto;
  font-size: 24px;
  color: #fc8b24;
  margin-right: 10px;
`

export const Text = styled.p`
  width: 279px;
  word-wrap: break-word;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 25px;
  text-align: left;
  color: #666;
`

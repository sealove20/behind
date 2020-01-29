import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  height: 400px;
  background: #fff;
`

export const Card = styled.div`
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
    font-family: Roboto;
    font-size: 18px;
    word-wrap: break-word;
    line-height: 25px;
    letter-spacing: 0.4px;
    width: 287px;
    color: #fff;
  }
`

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background: #00155f;
`

export const GetStartedButton = styled.button`
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

import styled from "styled-components"
import backgroundImage from "../../images/banner-bg.png"

export const Container = styled.main`
  display: flex;
  align-items: center;
  background-image: url(${backgroundImage});
  height: 537px;

  @media only screen and (max-width: 600px) {
    background-position: 75%;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22%;

  h1 {
    color: #fff;
    word-wrap: break-word;
    width: 476px;
    font-family: Roboto;
    font-size: 44px;
    line-height: 48px;
  }

  p {
    color: #fff;
    word-wrap: break-word;
    width: 523px;
    font-size: 18px;
    line-height: 140%;
  }
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

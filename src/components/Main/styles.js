import styled from "styled-components"
import backgroundImage from "../../images/banner-bg.png"

export const Container = styled.main`
  display: flex;
  align-items: center;
  background-image: url(${backgroundImage});
  height: 537px;

  @media only screen and (max-width: 600px) {
    background-position: 70%;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22%;

  h1 {
    font-family: Roboto;
    font-size: 44px;
    line-height: 48px;
    word-wrap: break-word;
    width: 476px;
    color: #fff;
  }

  p {
    margin: 20px 0;
    font-size: 18px;
    font-family: Roboto;
    line-height: 140%;
    word-wrap: break-word;
    width: 523px;
    color: #fff;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 15px;
    /* align-items: flex-start; */
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

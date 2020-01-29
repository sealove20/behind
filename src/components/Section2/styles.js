import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background: #fff;
  margin-top: 50px;
`
export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13%;

  h2 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 32px;
    word-wrap: break-word;
    color: ${props => props.theme.primary};
    width: 377px;
  }

  p {
    font-family: Roboto;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.4px;
    word-wrap: break-word;
    color: #666;
    width: 317px;
  }
`

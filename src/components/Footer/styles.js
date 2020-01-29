import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background: ${props => props.theme.primary};

  p {
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  #policy {
    text-align: center;
    font-size: 14px;
    word-wrap: break-word;
    width: 300px;
  }
`

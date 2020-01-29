import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.primary};
  height: 63px;
  background: #252aff;
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

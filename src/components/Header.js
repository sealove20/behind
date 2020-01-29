import React from "react"
import styled from "styled-components"

import logo from "../images/juno.svg"

import GetStartedButton from "./GetStartedButton"

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 63px;
  background: ${props => props.theme.primary};
`

const ThemeSwitchWraper = styled.div`
  display: flex;
  align-items: center;

  em {
    margin-left: 10px;
    font-size: 1rem;
  }
`
const ThemeSwitch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;

  input {
    display: none;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  div {
    background-color: #666;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;

    &:before {
      background-color: #fff;
      bottom: 4px;
      content: "";
      height: 26px;
      left: 4px;
      position: absolute;
      transition: 0.4s;
      width: 26px;
      border-radius: 50%;
    }
    border-radius: 34px;
  }
`

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <GetStartedButton />
      <ThemeSwitchWraper>
        <ThemeSwitch for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div class="slider round"></div>
        </ThemeSwitch>
        <em>Enable Dark Mode!</em>
      </ThemeSwitchWraper>
    </Container>
  )
}

export default Header

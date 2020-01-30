import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  &:nth-of-type(n + 2) {
    margin-left: 100px;
  }

  @media only screen and (max-width: 1400px) {
    &:nth-of-type(n + 2) {
      margin-left: 0px;
    }
    margin: 20px 0;
  }

  @media only screen and (max-width: 600px) {
    &:nth-of-type(n + 2) {
      margin-left: 0px;
    }
  }
`

const Title = styled.p`
  font-weight: 900;
  font-size: 24px;
  margin-right: 10px;
  color: ${props => props.theme.secondary};
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 25px;
  text-align: left;
  word-wrap: break-word;
  width: 279px;
  color: ${props => props.theme.primaryFontColor};
`

function Panel({ title, text }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  )
}

Panel.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Panel

import React from "react"
import Header from "../../components/Header"
import Main from "../../components/Main"
import Section1 from "../../components/Section1"
import Section2 from "../../components/Section2"
import Section3 from "../../components/Section3"
import Footer from "../../components/Footer"
import GlobalStyle from "../../components/Layout"

function About() {
  return (
    <GlobalStyle>
      <Header />
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </GlobalStyle>
  )
}

export default About

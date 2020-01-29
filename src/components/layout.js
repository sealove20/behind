import React from "react"

import GlobalStyle from "../styles/global"

import Header from "./Header"
import Main from "./Main"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  )
}
export default Layout

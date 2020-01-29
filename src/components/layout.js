import React from "react"

import GlobalStyle from "../styles/global"

import Header from "./Header"
import Main from "./Main"
import About from "./About"
import WorkWith from "./WorkWith"
import GetStarted from "./GetStarted"
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <About />
      <WorkWith />
      <GetStarted />
      <Footer />
    </>
  )
}
export default Layout

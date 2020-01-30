import React from "react"
import { ThemeProvider } from "styled-components"

import behind from "../src/styles/themes/behind"
import juno from "../src/styles/themes/juno"

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={behind}>{element}</ThemeProvider>
}

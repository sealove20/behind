import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"

import light from "../src/styles/themes/light"
import dark from "../src/styles/themes/dark"

export function wrapRootElement({ element }) {
  const [theme, setTheme] = useState(true)
  return <ThemeProvider theme={theme ? light : dark}>{element}</ThemeProvider>
}

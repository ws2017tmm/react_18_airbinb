/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 09:15:37
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-13 11:35:12
 */
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import store from "./store"
import "normalize.css"
import theme from "./assets/theme"
import "./assets/css/index.less"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
)

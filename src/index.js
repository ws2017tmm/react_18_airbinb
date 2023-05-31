/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 09:15:37
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-26 13:50:19
 */
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"

import App from "./App"
import "normalize.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
)

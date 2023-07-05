/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 09:15:37
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-26 10:38:47
 */

import { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
const App = memo(() => {
  return (
    <div className="App">
      <AppHeader />
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  )
})

export default App

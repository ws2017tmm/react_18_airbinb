/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 09:15:37
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-25 09:24:06
 */

import { memo } from "react"

const App = memo(() => {
  return (
    <div className="App">
      <div className="header">header</div>
      <div className="content">content</div>
      <div className="footer">footer</div>
    </div>
  )
})

export default App

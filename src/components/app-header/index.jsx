/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:27:51
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-26 10:37:16
 */
import React, { memo } from "react"

import { HeaderWrapper } from "./style"

import HeaderLeft from "./c-cpns/header-left"
import HeaderCenter from "./c-cpns/header-center"
import HeaderRight from "./c-cpns/header-right"

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader

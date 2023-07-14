/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:27:51
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-13 11:25:53
 */
import React, { memo, useState } from "react"
import { useSelector } from "react-redux"
import classNames from "classnames"

import { HeaderWrapper } from "./style"

import HeaderLeft from "./c-cpns/header-left"
import HeaderCenter from "./c-cpns/header-center"
import HeaderRight from "./c-cpns/header-right"

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)

  /** redux中获取数据 */
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))
  const { isFixed } = headerConfig

  /** 事件处理逻辑 */
  function searchBarClickHandle() {
    setIsSearch(true)
  }

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={searchBarClickHandle}
          />
          <HeaderRight />
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader

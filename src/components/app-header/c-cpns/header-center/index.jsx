/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:30:29
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-09 15:32:30
 */
import React, { memo } from "react"
// import SvgIcon from "@/assets/svg"

import { CenterWrapper } from "./style"
import IconSearchBar from "@/assets/svg-jsx/icon-search-bar"

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          {/* <SvgIcon svgClass="search_bar" name="search_bar" fill="#fff" /> */}
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter

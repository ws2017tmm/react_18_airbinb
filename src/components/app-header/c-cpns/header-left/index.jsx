/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:30:30
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-31 18:33:38
 */
import React, { memo } from "react"
import { LeftWrapper } from "./style"
import SvgIcon from "@/asset/svg"

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo-box">
        <SvgIcon svgClass="logo" name="logo" />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft

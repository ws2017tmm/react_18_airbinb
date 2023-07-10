/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:30:30
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-07 15:56:11
 */
import React, { memo } from "react"
import { LeftWrapper } from "./style"
import SvgIcon from "@/assets/svg"
import { useNavigate } from "react-router-dom"

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate("/home")
  }
  return (
    <LeftWrapper>
      <div className="logo-box" onClick={handleLogoClick}>
        <SvgIcon svgClass="logo" name="logo" />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft

/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-06-09 16:00:38
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-09 16:57:26
 */
import React, { memo } from "react"
import { useNavigate } from "react-router-dom"

import { FooterWrapper } from "./style"
import SvgIcon from "@/assets/svg"

const SectionFooter = memo((props) => {
  const { name } = props

  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  /** 事件处理的逻辑 */
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showMessage}</span>
        <SvgIcon name="more_arrow" color="#717171" />
      </div>
    </FooterWrapper>
  )
})

export default SectionFooter

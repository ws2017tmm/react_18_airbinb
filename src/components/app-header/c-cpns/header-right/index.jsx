/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:30:31
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-08 16:26:33
 */
import React, { memo, useEffect, useState } from "react"
import { RightWrapper } from "./style"
import SvgIcon from "@/assets/svg"

const HeaderRight = memo(() => {
  /** 定义组件内部的状态 */
  const [showPanel, setShowPanel] = useState(false)

  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true)
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])

  /** 事件处理函数 */
  const profileClickHandle = () => {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className="btn-list">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <SvgIcon name="global" svgClass="global" />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <SvgIcon name="menu" svgClass="menu" color="#717171" />
        <SvgIcon name="avatar" svgClass="avatar" color="#717171" />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight

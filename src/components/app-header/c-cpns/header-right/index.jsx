/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:30:31
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-31 18:52:12
 */
import React, { memo } from "react"
import { RightWrapper } from "./style"
import SvgIcon from "@/assets/svg"

const HeaderRight = memo(() => {
  const profileClickHandle = () => {
    console.log("我的点击")
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
        <SvgIcon name="menu" svgClass="menu" />
        <SvgIcon name="avatar" svgClass="avatar" />

        {/* { showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        ) } */}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight

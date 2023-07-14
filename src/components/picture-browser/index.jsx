/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-14 09:19:14
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-14 11:20:52
 */
import PropTypes from "prop-types"
import React, { memo, useEffect, useState } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import classNames from "classnames"

import { BrowserWrapper } from "./style"
import Indicator from "../indicator"
// import IconClose from "@/assets/svg-jsx/icon-close"
// import IconArrowLeft from "@/assets/svg-jsx/icon-arrow-left"
// import IconArrowRight from "@/assets/svg-jsx/icon-arrow-right"
// import IconTriangleDown from "@/assets/svg-jsx/icon-triangle-bottom"
// import IconTriangleUp from "@/assets/svg-jsx/icon-triangle-top"
import SvgIcon from "@/assets/svg"

const PictureBrowser = memo((props) => {
  const { pictureUrls = [], closeClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)
  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, [])

  /** 事件处理的逻辑 */
  function closeBtnClickHandle() {
    document.body.style.overflow = "auto"
    closeClick()
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setSelectIndex(newIndex)
    setIsNext(isNext)
  }

  function imgItemClickHandle(index) {
    setSelectIndex(index)
    setIsNext(index > selectIndex)
  }

  function toggleShowListHandle() {
    setShowList(!showList)
  }

  return (
    <BrowserWrapper isNext={isNext}>
      <div className="top">
        <span className="close-btn" onClick={closeBtnClickHandle}>
          {/* <IconClose /> */}
          <SvgIcon name="close" />
        </span>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <SvgIcon name="arrow_left" />
            {/* <IconArrowLeft width="77" height="77" /> */}
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <SvgIcon name="arrow_right" />
            {/* <IconArrowRight width="77" height="77" /> */}
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[selectIndex]}
              timeout={150}
              classNames="fade"
            >
              <img src={pictureUrls[selectIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {selectIndex + 1}/{pictureUrls.length}:
              </span>
              <span> room Apartment图片{selectIndex + 1}</span>
            </div>
            <div className="toggle" onClick={toggleShowListHandle}>
              隐藏照片列表
              {showList ? (
                <SvgIcon name="triangle_down" />
              ) : (
                <SvgIcon name="triangle_up" />
              )}
            </div>
          </div>
          <div className="list" style={{ height: showList ? "67px" : "0" }}>
            <Indicator selectIndex={selectIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: index === selectIndex
                    })}
                    key={item}
                    onClick={(e) => imgItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser

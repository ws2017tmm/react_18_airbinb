/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-03 17:46:13
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-04 10:24:38
 */
import React, { memo, useState, useRef, useEffect } from "react"
import { ViewWrapper } from "./style"
import SvgIcon from "@/assets/svg"

const ScrollView = memo((props) => {
  /** 定义内部的状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const currentIndexRef = useRef()
  const totalDistanceRef = useRef()

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  const scrollContentRef = useRef()
  useEffect(() => {
    // 一共可以滚动的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 本身占据的宽度
    const clientWidth = scrollContentRef.current.clientWidth
    // 可滚动的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    // 右侧按钮是否展示
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理的逻辑 */
  const controlClickHandle = (direction) => {
    currentIndexRef.current = currentIndexRef.current ?? 0
    if (direction === "left") {
      currentIndexRef.current--
    } else {
      currentIndexRef.current++
    }
    // 找到当前滚动到最左边的元素
    const newEl = scrollContentRef.current.children[currentIndexRef.current]
    // 滚动的距离
    const newOffsetLeft = newEl.offsetLeft
    // 滚动
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    // 是否继续显示左右侧的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle("left")}
        >
          <SvgIcon name="arrow_left" svgClass="arrow_left" color="#717171" />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle("right")}
        >
          <SvgIcon name="arrow_right" svgClass="arrow_right" color="#717171" />
        </div>
      )}
    </ViewWrapper>
  )
})

export default ScrollView

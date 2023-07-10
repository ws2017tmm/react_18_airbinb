/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-06-12 18:19:34
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-10 09:51:04
 */
import PropTypes from "prop-types"
import React, { memo, useState, useRef } from "react"
import classNames from "classnames"
import { Rating } from "@mui/material"
import { Carousel } from "antd"
import { ItemWrapper } from "./style"
import Indicator from "../indicator"
import SvgIcon from "@/assets/svg"

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)

  const swiperRef = useRef()
  function controlClickHandle(isNext = true) {
    if (isNext) swiperRef.current.next()
    else swiperRef.current.prev()

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  function itemClickHandle() {
    if (itemClick) itemClick()
  }

  // 单个图片
  const singleImage = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  // 轮播图
  const swiper = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false)}>
          <SvgIcon name="arrow_left" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true)}>
          <SvgIcon name="arrow_right" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index
                  })}
                ></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={swiperRef}>
        {itemData.picture_urls?.map((item, index) => {
          return (
            <div key={index} className="cover">
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? swiper : singleImage}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem

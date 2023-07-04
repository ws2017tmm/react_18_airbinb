/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-03 15:28:31
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-03 15:29:18
 */
import PropTypes from "prop-types"
import React, { memo } from "react"
import { ItemWrapper } from "./style"

const LongforItem = memo((props) => {
  const { itemData } = props

  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
  itemData: PropTypes.object
}

export default LongforItem

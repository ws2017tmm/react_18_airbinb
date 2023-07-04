/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-06-30 15:09:39
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-03 18:11:53
 */

import PropTypes from "prop-types"
import React, { memo, useState } from "react"
import classNames from "classnames"
import { TabsWrapper } from "./style"
import ScrollView from "../scroll-view"

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs

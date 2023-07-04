/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-03 15:38:39
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-03 17:58:15
 */
import PropTypes from "prop-types"
import React, { memo } from "react"

import SectionHeader from "@/components/section-header"
import { SectionV3Wrapper } from "./style"
import RoomItem from "@/components/room-item"
import ScrollView from "@/components/scroll-view"
import SectionFooter from "@/components/section-footer"

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3

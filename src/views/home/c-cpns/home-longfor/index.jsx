/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-03 14:55:41
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-03 15:04:15
 */
import PropTypes from "prop-types"
import React, { memo } from "react"
import { LongforWrapper } from "./style"
import ScrollView from "@/components/scroll-view"
import LongforItem from "@/components/longfor-item"
import SectionHeader from "@/components/section-header"

const HomeLongfor = memo((props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem itemData={item} key={item.city} />
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor

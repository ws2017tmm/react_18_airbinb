/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-06-09 15:46:40
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-30 14:37:43
 */
import PropTypes from "prop-types"
import React, { memo } from "react"

import { SectionV1Wrapper } from "./style"

import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionFooter from "@/components/section-footer"

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1

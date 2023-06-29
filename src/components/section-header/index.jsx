/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-06-09 15:59:22
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-09 17:04:42
 */
import PropTypes from "prop-types"
import React, { memo } from "react"

import { HeaderWrapper } from "./style"

const SectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader

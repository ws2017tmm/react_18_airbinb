/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 13:54:51
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-08 15:47:42
 */
import React, { memo } from "react"
import "./style.css"

require("./icons/avatar.svg")

let importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext)

try {
  importAll(require.context("./icons", true, /\.svg$/))
} catch (error) {
  console.log(error)
}

const SvgIcon = memo((props) => {
  const { name, color, svgClass } = props
  return (
    <svg className={`svg-icon ${svgClass}`}>
      <use xlinkHref={"#" + name} fill={color} />
    </svg>
  )
})

export default SvgIcon

/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-14 11:12:50
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-14 11:13:09
 */
import React, { memo } from "react"
import { styleStrToObj } from "./utils"

const IconTriangleBottom = memo(() => {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={styleStrToObj("height: 10px; width: 10px; fill: currentcolor;")}
    >
      <path
        d="m23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
})

export default IconTriangleBottom

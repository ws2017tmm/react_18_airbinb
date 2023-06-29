/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-06-09 15:46:46
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-27 15:53:15
 */
import styled from "styled-components"

export const SectionV1Wrapper = styled.div`
  margin-top: 30px;
`

function toCamelCase(str) {
  var parts = str.split("-")
  var camelCaseStr = parts[1]
  for (var i = 2; i < parts.length; i++) {
    camelCaseStr += parts[i].charAt(0).toUpperCase() + parts[i].slice(1)
  }
  return camelCaseStr
}
var str = "-webkit-border-image-"
var newStr = toCamelCase(str)
console.log(newStr)

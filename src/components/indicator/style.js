/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-06 11:09:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-06 11:12:04
 */
import styled from "styled-components"

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .scroll {
    position: relative;
    display: flex;
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`

/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:30:30
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-01 19:49:41
 */

import styled from "styled-components"

export const LeftWrapper = styled.div`
  flex: 1;

  .logo-box {
    display: flex;
    align-items: center;
    margin-left: 24px;

    .logo {
      width: 102px;
      height: 32px;
      /* color: var(--primary-color); */
      color: ${(props) => props.theme.color.primaryColor};
      cursor: pointer;
    }
  }
`

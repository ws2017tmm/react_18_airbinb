/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-06-09 16:00:38
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-09 16:58:57
 */
import styled from "styled-components"

const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.color};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`

export { FooterWrapper }

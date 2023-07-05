/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-05 13:46:04
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-05 15:12:31
 */
import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  .page-info {
    text-align: center;

    .info {
      margin-top: 20px;
    }
  }

  .MuiPaginationItem-icon {
    font-size: 20px;
  }

  .MuiPaginationItem-page {
    margin: 0 9px;

    &:hover {
      text-decoration: underline;
    }
  }

  .MuiPaginationItem-page.Mui-selected {
    background-color: #222;
    color: #fff;

    &:hover {
      background-color: #222;
    }
  }
`

/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-26 10:30:31
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-31 18:55:14
 */
import styled from "styled-components"

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  .btn-list {
    display: flex;
    justify-content: center;

    .global {
      height: 16px;
      width: 16px;
    }
  }

  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;

    cursor: pointer;
  }
`

/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-13 11:11:26
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-13 11:11:41
 */
import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      isHome: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer

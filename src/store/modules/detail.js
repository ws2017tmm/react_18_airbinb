/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 16:37:03
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-10 09:49:47
 */
import { createSlice } from "@reduxjs/toolkit"

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoActon(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoActon } = detailSlice.actions
export default detailSlice.reducer

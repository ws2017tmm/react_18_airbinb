/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 16:36:57
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-26 10:23:40
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getHomeGoodPriceData } from "@/services/modules/home"

// 对应第一二种用法
// export const fetchHomeDataAction = createAsyncThunk(
//   "fetch/homedata",
//   async (payload) => {
//     const res = await getHomeGoodPriceData()
//     return res
//   }
// )

// 第三种用法(开发中实际用到较多)
export const fetchHomeDataAction = createAsyncThunk(
  "fetch/homedata",
  async (payload, store) => {
    // payload 对应调用接口的入参
    const res = await getHomeGoodPriceData()
    store.dispatch(changeGoodPriceInfoAction(res))
  }
)

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
  // 第一种用法（已经快要被淘汰了）
  // extraReducers: {
  //   // The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }
  // 第二种用法，官方建议
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, ation) => {
  //     state.goodPriceInfo = ation.payload
  //   })
  // }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer

/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 16:36:57
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-03 15:26:51
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import {
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomePlusData
} from "@/services/modules/home"

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
  (payload, { dispatch }) => {
    // payload 对应调用接口的入参 第二个参数是store

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfoAction(res))
    })

    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: "home",
  initialState: {
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    goodPriceInfo: {},
    highScoreInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
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

export const {
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer

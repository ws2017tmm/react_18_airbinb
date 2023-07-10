/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 09:28:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-05 14:51:21
 */
import { configureStore } from "@reduxjs/toolkit"
import homereducer from "./modules/home"
import entireReducer from "./modules/entrie"
import detailReducer from "./modules/detail"

const store = configureStore({
  reducer: {
    home: homereducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store

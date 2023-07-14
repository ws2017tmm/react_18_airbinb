/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 09:28:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-13 11:21:27
 */
import { configureStore } from "@reduxjs/toolkit"
import homereducer from "./modules/home"
import entireReducer from "./modules/entrie"
import detailReducer from "./modules/detail"
import mainReducer from "./modules/main"

const store = configureStore({
  reducer: {
    home: homereducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store

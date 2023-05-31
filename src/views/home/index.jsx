/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 10:43:17
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-31 18:19:28
 */
import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { fetchHomeDataAction } from "@/store/modules/home"
import HomeWrapper from "./style"

const Home = memo(() => {
  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  const store = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )
  console.log(store, "-----store")
  return <HomeWrapper>Home</HomeWrapper>
})

export default Home

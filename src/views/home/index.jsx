/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 10:43:17
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-30 14:40:50
 */
import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { fetchHomeDataAction } from "@/store/modules/home"
import HomeWrapper from "./style"
import HomeSectionV1 from "./c-cpns/home-section-v1"

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
    }),
    shallowEqual
  )

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <div className="content">
        {/* 高性价比房源 */}
        <HomeSectionV1 infoData={goodPriceInfo} />
        {/* 高分好评房源 */}
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home

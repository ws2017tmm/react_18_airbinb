/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 10:43:17
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-13 11:10:51
 */
import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import _ from "lodash"

import { fetchHomeDataAction } from "@/store/modules/home"
import { changeHeaderConfigAction } from "@/store/modules/main"
import HomeWrapper from "./style"
import HomeBanner from "./c-cpns/home-banner"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeLongfor from "./c-cpns/home-longfor"
import HomeSectionV3 from "./c-cpns/home-section-v3"

const Home = memo(() => {
  /** 从redux中获取数据 */
  const {
    discountInfo,
    recommendInfo,
    longforInfo,
    goodPriceInfo,
    highScoreInfo,
    plusInfo
  } = useSelector(
    (state) => ({
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  )

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 热门目的地 */}
        {!_.isEmpty(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {/* 推荐-精彩之地 */}
        {!_.isEmpty(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo} />
        )}
        {/* 你可能想去 */}
        {!_.isEmpty(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {/* 高性价比房源 */}
        {!_.isEmpty(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {/* 高分好评房源 */}
        {!_.isEmpty(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
        {/* Plus房源 */}
        {!_.isEmpty(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home

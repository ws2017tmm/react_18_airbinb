/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 10:43:28
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-10 10:14:43
 */

// import { changeHeaderConfigAction } from '@/store/features/main'
import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import DetailPictures from "./c-cpns/detail-pictures"
import { DetailWrapper } from "./style"
import DetailInfo from "./c-cpns/detail-infos"

const Detail = memo((props) => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail

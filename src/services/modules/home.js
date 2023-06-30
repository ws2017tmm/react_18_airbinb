/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 16:15:04
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-30 14:21:44
 */

import request from "../index"

export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return request.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return request.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return request.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return request.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return request.get({
    url: "/home/plus"
  })
}

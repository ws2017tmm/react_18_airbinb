/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 16:15:04
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-25 16:20:18
 */

import request from "../index"

export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice"
  })
}

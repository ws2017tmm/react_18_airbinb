/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 16:15:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-05 14:53:55
 */
import request from ".."

export function getEntireRoomList(offset, size = 20) {
  return request.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}

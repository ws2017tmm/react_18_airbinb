/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-05 13:46:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-10 09:43:48
 */

import React, { memo } from "react"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { RoomsWrapper } from "./style"
import RoomItem from "@/components/room-item"

import { changeDetailInfoActon } from "@/store/modules/detail"

const EntireRooms = memo(() => {
  const { roomList, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  const navitate = useNavigate()
  const dispatch = useDispatch()
  function handleItemClick(item) {
    navitate("/detail")
    dispatch(changeDetailInfoActon(item))
  }

  return (
    <RoomsWrapper>
      <div className="list">
        {roomList.map((item, index) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={(e) => handleItemClick(item)}
            />
          )
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms

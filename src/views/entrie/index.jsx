/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 10:43:27
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-13 11:33:18
 */
import React, { memo, useEffect } from "react"
import { useDispatch } from "react-redux"

import EntriesWrapper from "./style"
import EntireFilter from "./c-cpns/entries-filter"
import EntireRooms from "./c-cpns/entries-rooms"
import EntirePagination from "./c-cpns/entries-pagination"

import { fetchEntireDataAction } from "@/store/modules/entrie/actionCreators"
import { changeHeaderConfigAction } from "@/store/modules/main"

const Entries = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])
  return (
    <EntriesWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntriesWrapper>
  )
})

export default Entries

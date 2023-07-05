/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-07-05 14:17:47
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-07-05 14:20:06
 */

import * as actionTypes from "./constants"

const initialState = {
  isLoading: false,
  currentPage: 0,
  roomList: [],
  totalCount: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LOADING:
      return { ...state, isLoading: action.isLoading }
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    default:
      return state
  }
}

export default reducer

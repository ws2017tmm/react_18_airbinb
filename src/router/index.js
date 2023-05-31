/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 10:43:02
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-25 11:48:23
 */
import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const Entries = React.lazy(() => import("@/views/entries"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/entries",
    element: <Entries />
  },
  {
    path: "/detail",
    element: <Detail />
  }
]

export default routes

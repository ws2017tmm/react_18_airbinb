/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 15:57:49
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-05-25 16:07:18
 */
import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config/config"

class WSRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

const request = new WSRequest(BASE_URL, TIMEOUT)
export default request

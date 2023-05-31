import { configureStore } from "@reduxjs/toolkit"
import homereducer from "./modules/home"

const store = configureStore({
  reducer: {
    home: homereducer
  }
})

export default store

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import sidebarReducer from "./sidebarSlice";

 
const store = configureStore(
    {
        reducer:{
            app: appSlice,
            sidebar: sidebarReducer,
        }
    }
)

export default store


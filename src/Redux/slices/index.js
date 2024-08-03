import { coursesSlice } from "./courses";
import { cartSlice } from "./cart";
import { globalSlice } from "./global";
import { combineSlices } from "@reduxjs/toolkit";

const rootReducer = combineSlices(coursesSlice, cartSlice, globalSlice);
export default rootReducer
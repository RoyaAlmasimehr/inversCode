import { createSlice } from "@reduxjs/toolkit";


export const coursesSlice =createSlice({
    name:'courses',
    initialState:[],
    reducers:{
        getCourses:(state,action)=>{

        },
        getCourseById :(state,action)=>{

        },
        deleteCourseById:(state,action)=>{

        },
        editCourseById :(state,action)=>{

        }
    }
})

export const { editCourseById, deleteCourseById, getCourseById, getCourses } =
  coursesSlice.actions

export default coursesSlice.reducer
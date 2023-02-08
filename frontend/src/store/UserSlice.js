import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: false,
    isAuth: false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
         
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
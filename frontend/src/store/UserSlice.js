import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: false,
    isAuth: false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            const user = action.payload;
            if(!user){
                state.isAuth = false;
            }

            action.isAuth = true

        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
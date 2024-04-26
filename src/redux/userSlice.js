import { createSlice } from "@reduxjs/toolkit";


const intialState = {
    name: "",
    userName: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser: (state, action) => {
            const { name, userName, email } = action.payload;
            state.name = name;
            state.userName = userName;
            state.email = email;
        }, 
        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
})

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
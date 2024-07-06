
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
  UserInfo:{},
  previousRoute:null,
  loginTime:0,
  
};
export const UserAuth = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      
    },
    User_Data: (state, action) => {
      
      state.UserInfo = action.payload;
      state.loginTime=action.payload.loginTime;
    },
    setPreviousRoute:(state,action)=>{
       state.previousRoute=action?.payload;
       
    }
 
},
});

export const { updateAuth,User_Data ,setPreviousRoute} = UserAuth.actions;

export default UserAuth.reducer;

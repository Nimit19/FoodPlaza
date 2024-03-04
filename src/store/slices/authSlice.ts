import { createSlice } from "@reduxjs/toolkit";

// https://blog.logrocket.com/handling-user-authentication-redux-toolkit/#prerequisites

type userInfoType = {
  name: string;
  email: string;
  password: string;
};

export type authSliceType = {
  loading: boolean;
  userInfo: userInfoType;
  userToken: string;
  error: string;
  success: boolean;
};

const initialState: authSliceType = {
  loading: false,
  userInfo: { name: "", email: "", password: "" },
  userToken: "",
  error: "",
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userData, userToken } = action.payload;
      localStorage.setItem("token", userToken);
      state.userInfo = userData;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state = initialState;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice;

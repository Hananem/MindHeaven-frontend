import { createSlice } from "@reduxjs/toolkit";

let userInfo = null;
try {
  const storedUserInfo = localStorage.getItem("userInfo");
  if (storedUserInfo && storedUserInfo !== "undefined") {
    userInfo = JSON.parse(storedUserInfo);
  }
} catch (error) {
  console.error("Error parsing userInfo from localStorage:", error);
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userInfo,
    registerMessage: null,
    isEmailVerified: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    register(state, action) {
      state.registerMessage = action.payload;
    },
    setUserPhoto(state, action) {
      if (state.user) {
        state.user.profilePhoto = action.payload;
      }
    },
    setUsername(state, action) {
      if (state.user) {
        state.user.username = action.payload;
      }
    },
    setIsEmailVerified(state) {
      state.isEmailVerified = true;
      state.registerMessage = null;
    },
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authActions, authReducer };

import { createSlice } from '@reduxjs/toolkit';

// 获取 localStorage 中存储的 isLogin 值
const initialState = {
  isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,  // 默认值为 false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
      localStorage.setItem('isLogin', JSON.stringify(true));  // 登录后保存到 localStorage
    },
    logout(state) {
      state.isLogin = false;
      localStorage.setItem('isLogin', JSON.stringify(false));  // 登出后清除 localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

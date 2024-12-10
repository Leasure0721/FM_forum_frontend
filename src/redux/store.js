// 从 Redux Toolkit 导入 configureStore 函数
import { configureStore } from '@reduxjs/toolkit';
// 导入用户切片的 reducer
import userReducer from './userSlice';

// 使用 configureStore 创建 Redux store
const store = configureStore({
  reducer: {
    user: userReducer,  // 将 userSlice 的 reducer 添加到 store 中, 并命名为 'user'
  },
});

// 导出配置好的 store
export default store;

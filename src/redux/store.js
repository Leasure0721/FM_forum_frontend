// 从 Redux Toolkit 导入 configureStore 函数
import { configureStore } from '@reduxjs/toolkit';
// 导入用户切片的 reducer
import userReducer from './userSlice';
// 导入 auth 切片的 reducer
import authReducer from './authSlice';
// 导入 Redux Persist 相关的函数
import { persistStore, persistReducer } from'redux-persist';
// 导入 Redux Persist 的配置
import storage from'redux-persist/lib/storage';

// 创建 Redux Persist 的配置
const persistConfig = {
  key: 'user',
  storage
}

// 使用 Redux Persist 包装 userReducer
const persistedreducer = persistReducer(persistConfig, userReducer);
// 使用 Redux Persist 包装 authReducer
const persistedauthReducer = persistReducer(persistConfig, authReducer);

// 使用 configureStore 创建 Redux store
const store = configureStore({
  reducer: {
    // 注册 userReducer 和 authReducer
    user: persistedreducer, 
    auth: persistedauthReducer, 
  },
});

const persistor = persistStore(store);

// 导出配置好的 store, 以及 Redux Persist 的 persistor
export  { store, persistor };

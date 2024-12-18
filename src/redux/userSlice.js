// 从 Redux Toolkit 导入 createSlice 函数
import { createSlice } from '@reduxjs/toolkit';

// 定义初始状态
const initialState = {
    username: '', // 初始化用户名为 '用户名'
    signature: '这个人很懒，什么都没留下~', // 初始化签名为 '这个人很懒，什么都没留下~'
    gender: 'other', // 初始化性别为 'other'
    avatar: '' ,// 初始化头像为空字符串
    birthday: null, // 初始化生日为空值
    createtime: null, // 初始化创建时间为空值
}

// 创建 userSlice
const userSlice = createSlice({
    name: 'user', // slice 的名称
    initialState, // 初始状态
    reducers: { // 定义 reducer 函数
        // 修改用户名的 reducer
        setUsername: (state, action) => {
            state.username = action.payload; // 将用户名更新为 action.payload 的值
        },
        // 修改签名的 reducer
        setSignature: (state, action) => {
            if (action.payload.length === 0){
                state.signature = '这个人很懒，什么都没留下~'; // 如果签名为空字符串，则将签名设置为默认值
                return;
            }
            state.signature = action.payload; // 将签名更新为 action.payload 的值
        },
        // 修改性别的 reducer
        setGender: (state, action) => {
            state.gender = action.payload; // 将性别更新为 action.payload 的值
        },
        // 修改头像的 reducer
        setAvatar: (state, action) => {
            state.avatar = action.payload; // 将头像更新为 action.payload 的值
        },
        // 修改生日的 reducer
        setBirthday: (state, action) => {
            const birthday = action.payload;
            // 确保生日的格式为 "YYYY-MM-DD"，可以根据需要做日期验证
            state.birthday = birthday ? birthday : null; // 如果没有传入有效生日，则设为 null
        },
        setCreatetime: (state, action) => {
            const createtime = action.payload;
            // 确保创建时间的格式为 "YYYY-MM-DD HH:mm:ss"，可以根据需要做日期验证
            state.createtime = createtime ? createtime : null; // 如果没有传入有效创建时间，则设为 null
        }
    },    
});

// 导出 setUsername action，以便在组件中使用
export const { setUsername, setSignature, setGender, setAvatar, setBirthday, setCreatetime } = userSlice.actions;

// 导出 userSlice 的 reducer，以便在 store 中使用
export default userSlice.reducer;

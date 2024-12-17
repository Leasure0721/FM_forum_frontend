import React, { createContext, useState, useContext } from "react";

//上下文保存登录状态
const AuthContext = createContext();

//Provider组件，提供AuthContext

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const login = () => setIsLogin(true);
    const logout = () => setIsLogin(false);

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

//获取上下文数据的hook
export const useAuth = () => useContext(AuthContext);
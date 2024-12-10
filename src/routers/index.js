import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/loading/load.js";
import Login from "../pages/login/login/login.js";

const HomePage = lazy(() => import("../pages/home/homepage.js"));  // 引入 homepage 组件
const ErrorPage = lazy(() => import("../components/error/error.js"));  // 引入 errorpage 组件
const LoginPage = lazy(() => import("../pages/login/login/login.js"));  // 引入 loginpage 组件
const RegisterPage = lazy(() => import("../pages/login/register/register.js"));  // 引入 registerpage 组件
const ForgetpwdPage = lazy(() => import("../pages/login/forgetpwd/forgetpwd.js"));  // 引入 forgetpwdpage 组件
const EmailVerifyPage = lazy(() => import("../pages/login/emailver/emailver.js"));  // 引入 emailverifypage 组件
const HotPage = lazy(() => import("../pages/hot/hot.js"));  // 引入 hotpage 组件
const FollowPage = lazy(() => import("../pages/follow/follow.js"));  // 引入 followpage 组件
const MyContentPage = lazy(() => import("../pages/userinfo/userinfo.js"));  // 引入 mycontentpage 组件
const CreateContentPage = lazy(() => import("../pages/create/create.js"));  // 引入 createcontentpage 组件
const PostPage = lazy(() => import("../pages/post/post.js"));  // 引入 postpage 组件
const SetupPage = lazy(() => import("../pages/login/setup/setup.js"));  // 引入 setuppage 组件

const routers = [
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
     
      {/* 首页相关 */}
      <Route path="/home" element={<HomePage />} />

      {/* 热门相关 */}
      <Route path="/hot" element={<HotPage />} />

       {/* 关注相关 */}
       <Route path="/follow" element={<FollowPage />} />

       {/* 我的内容相关 */}
       <Route path="/userinfo" element={<MyContentPage />} />
      
      {/* 登录相关 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgetpwd" element={<ForgetpwdPage />} />
      <Route path="/emailver" element={<EmailVerifyPage />} />
      <Route path="/setup" element={<SetupPage />} />


       {/* 创建内容相关 */}
       <Route path="/create" element={<CreateContentPage />} />

       {/* 帖子相关 */}
       <Route path="/post" element={<PostPage />} />
      
      {/* 错误页面 */}
      <Route path="*" element={<ErrorPage />} />
      
      {/*加载页面*/ 
      /* <Route path="/loadding" element={<Loading />} /> */}
    </Routes>
  </Suspense>
];

export default routers;

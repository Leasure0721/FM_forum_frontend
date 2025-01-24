import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/loading/load.js";

const HomePage = lazy(() => import("../pages/home/homepage.js"));  // 引入 homepage 组件
const ErrorPage = lazy(() => import("../components/error/error.js"));  // 引入 errorpage 组件
const LoginPage = lazy(() => import("../pages/login/login/login.js"));  // 引入 loginpage 组件
const RegisterPage = lazy(() => import("../pages/login/register/register.js"));  // 引入 registerpage 组件
const ForgetpwdPage = lazy(() => import("../pages/login/forgetpwd/forgetpwd.js"));  // 引入 forgetpwdpage 组件
const EmailVerifyPage = lazy(() => import("../pages/login/emailver/emailver.js"));  // 引入 emailverifypage 组件
const FollowPage = lazy(() => import("../pages/follow/follow.js"));  // 引入 followpage 组件
const MyContentPage = lazy(() => import("../pages/userinfo/userinfo.js"));  // 引入 mycontentpage 组件
const CreateContentPage = lazy(() => import("../pages/create/create.js"));  // 引入 createcontentpage 组件
const PostPage = lazy(() => import("../pages/post/post.js"));  // 引入 postpage 组件
const SetupPage = lazy(() => import("../pages/login/setup/setup.js"));  // 引入 setuppage 组件
const MessagePage = lazy(() => import("../pages/message/message.js"));  // 引入 messagepage 组件
const HistoryPage = lazy(() => import("../pages/history/history.js"));  // 引入 historypage 组件
const StarPage = lazy(() => import("../pages/star/star.js"));  // 引入 starpage 组件
const TaiPage = lazy(() => import("../pages/TAI/tai.js"));  // 引入 tai 页面

const routers = [
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
     
      {/* 首页相关 */}
      <Route path="/home" element={<HomePage />} />

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
       <Route path="/tai" element={<TaiPage />} />

       {/* 消息相关 */}
       <Route path="/message/:tabId?" element={<MessagePage />} />

       {/* 浏览历史相关 */}
       <Route path="/history" element={<HistoryPage />} />

       {/* 收藏页面相关 */}
       <Route path="/star" element={<StarPage />} />
      
      {/* 错误页面 */}
      <Route path="*" element={<ErrorPage />} />
      
      {/*加载页面*/ 
      /* <Route path="/loadding" element={<Loading />} /> */}
    </Routes>
  </Suspense>
];

export default routers;

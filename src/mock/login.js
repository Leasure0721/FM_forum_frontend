// mock.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// 创建 mock 实例
const mock = new MockAdapter(axios);

// 模拟登录接口
mock.onPost('/api/login').reply(config => {
  const { account, password } = JSON.parse(config.data);
  console.log('登录请求参数：', account, password);
  
  // 模拟账号和密码校验
  if (account === 'test@domain.com' && password === '123456') {
    return [200, { success: true, message: '登录成功' }];
  } else {
    return [200, { success: false, message: '用户名或密码错误' }];
  }
});

import React from 'react';
import styles from './index.less'
import { Button, Input, message } from 'antd'
import { UserOutlined, LockFilled, SmileOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { isInputEmpty, isEmailValid } from '../../../utils/validation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/svg/logo.svg'
import '../../../mock/login'
import axios from 'axios';


const Login = () => {
    const [account, setAccount] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessages, setErrorMessages] = useState("");

    const navigate = useNavigate();

    const [messageApi,contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type:'success',
            content: '启动成功',
        })
    }

    const handleLogin = async () => {
        if (isInputEmpty(account) || isInputEmpty(password)) {
            setErrorMessages("输入框不能为空！");
            return;
        }
        // if (account.includes('@') ) {
        //     if (!isEmailValid(account)) {
        //         setErrorMessages("请输入正确的邮箱格式！");
        //         return;
        //     }
        // }
        else {
            console.log('username login');
            try {
                const response = await fetch('http://localhost:8081/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        account: account,
                        password: password
                    })
                })
                const data = await response.json();
                console.log(data);
                if (data.code === '200') {
                    success();
                    setTimeout(() => {
                        navigate('/home');
                    }, 800);
                } else {
                    setErrorMessages(data.msg);
                }
            }
            catch (error) {
                console.log('error detailes', error);
                setErrorMessages("网络错误，请稍后再试！");
            }
        }


        // try {
        //     const response = await axios.post('/api/login', {
        //         account,
        //         password
        //     });

        //     console.log(response);
        //     const data = response.data;
        //     if(data.success){
        //         navigate('/home');
        //     }else{
        //         setErrorMessages("用户名或密码错误！");
        //     }

        // }catch(error){
        //     console.log('error detailes',error.response);
        //     setErrorMessages("网络错误，请稍后再试！");
        // }
    }

    return (
        <div className={styles.loginPage}>
            {contextHolder}
            <div className={styles.loginContent}>
                <div className={styles.emailenter}>
                    <a href='/emailver' style={{ color: '#666', underline: 'none' }}>邮箱验证登录</a>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <img src={Logo} alt='logo' />
                </div>
                <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>
                    欢迎！请登录
                </div>
                <div>
                    <Input prefix={<UserOutlined />}
                        placeholder='请输入用户名或邮箱'
                        value={account}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (!value.includes(' ')) {
                                setAccount(value);
                            }
                        }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Input.Password prefix={<LockFilled />}
                        placeholder='请输入密码'
                        value={password}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (!value.includes(' ')) {
                                setPassword(value);
                            }
                        }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Button type='primary'
                        style={{ width: '80%', fontSize: '16px' }}
                        onClick={handleLogin}>登 录</Button>
                </div>
                <div className={styles.errorMessage}>
                    {errorMessages}
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '12px' }}>
                        没有账号？<a href='/register' style={{ color: '#666' }}>注册</a>
                    </div>
                    <div style={{ fontSize: '12px' }}>
                        <a href='/forgetpwd' style={{ color: '#666' }}>忘记密码</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
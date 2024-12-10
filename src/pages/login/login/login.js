import React from'react';
import styles from './index.less'
import { Button, Input } from 'antd' 
import { UserOutlined, LockFilled, SmileOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { isInputEmpty,isEmailValid } from '../../../utils/validation';
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

    const handleLogin = async() => {
       if (isInputEmpty(account) || isInputEmpty(password)) {
           setErrorMessages("用户名或密码不为空！");
           return;
        }
        if (account.includes('@') ) {
            if (!isEmailValid(account)) {
                setErrorMessages("请输入正确的邮箱格式！");
                return;
            }
        }

        try {
            const response = await axios.post('http://localhost:8081/user/login', {
                uname: account.trim(), // 确保无多余空格
                password: password.trim()
            });
            console.log('登录成功:', response.data);
        } catch (error) {
            if (error.response) {
                console.log('响应错误:', error.response.status, error.response.data);
            } else if (error.request) {
                console.log('请求未发送成功:', error.request);
            } else {
                console.log('其他错误:', error.message);
            }
            setErrorMessages("网络错误，请稍后再试！");
        }
        

        setErrorMessages("");

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
            <div className={styles.loginContent}>
                <div className={styles.emailenter}>
                    <a href='/emailver' style={{color: '#666', underline: 'none'}}>邮箱验证登录</a>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <img src={Logo} alt='logo' />
                </div>
                <div style={{fontSize: '24px',fontWeight: '800',marginBottom: '20px'}}>
                    欢迎！请登录
                </div>
                <div>
                    <Input prefix={ <UserOutlined />} 
                           placeholder='请输入用户名或邮箱'
                           value={account}
                           onChange={(e) => {
                            const value = e.target.value;
                            if(!value.includes(' ')){
                                setAccount(value);
                            }
                           }}/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <Input.Password prefix={ <LockFilled /> } 
                                    placeholder='请输入密码'
                                    value={password}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if(!value.includes(' ')){
                                            setPassword(value);
                                        }
                                       }}/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <Button type='primary' 
                            style={{width: '80%',fontSize: '16px'}}
                            onClick={handleLogin}>登 录</Button>
                </div>
                <div className={styles.errorMessage}>
                    {errorMessages}
                </div>
                <div style={{marginTop: '20px',display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{fontSize: '12px'}}>
                        没有账号？<a href='/register' style={{color: '#666'}}>注册</a>
                    </div>
                    <div style={{fontSize: '12px'}}>
                        <a href='/forgetpwd' style={{color: '#666'}}>忘记密码</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
import React from'react';
import styles from '../common.less'
import { Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { checkPasswordStrength, isInputEmpty,isEmailValid } from '../../../utils/validation';
import {useNavigate} from "react-router-dom";
import Logo from '../../../assets/svg/logo.svg';

const Register = () => {
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [captcha, setCaptcha] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [strength, setStrength] = React.useState(0);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/login');
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);

        const strength = checkPasswordStrength(password);
        setStrength(strength);
        console.log(strength);
    }

    const handleRegister = () => {
        if(isInputEmpty(username)){
            setErrorMessage('用户名不为空');
            return;
        }
        if(username.length < 1 || username.length > 16){
            setErrorMessage('用户名长度为 2 - 16 位');
            return;
        }
        if(isInputEmpty(email)){
            setErrorMessage('邮箱不为空');
            return;
        }
        if(!isEmailValid(email)){
            setErrorMessage('邮箱格式不正确');
            return;
        }
        if(isInputEmpty(password)){
            setErrorMessage('密码不为空');
            return;
        }
        if(strength < 2){
            setErrorMessage('密码强度不足，请重新输入');
            return;
        }
        if(isInputEmpty(captcha)){
            setErrorMessage('验证码不为空');
            return;
        }

        setErrorMessage('');
    }

    return (
        <div className={styles.Page}>
            <div className={styles.Content}>
                <div className={styles.bcklogin} onClick={handleBack}>
                    <ArrowLeftOutlined style={{marginTop: '4px',marginRight: '4px'}}/> 返回登录
                </div>
                <img src={Logo} alt='logo' />
                <div style={{fontSize: '24px',fontWeight: '800',marginBottom: '20px'}}>
                    创建一个新的账号吧！
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Input placeholder="请输入用户名" 
                           prefix={<UserOutlined />} 
                           value={username}
                           onChange={(e) => {
                            const value = e.target.value;
                            if(!value.includes(' ')){
                                setUsername(value);
                            }
                           }}/>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Input placeholder="请输入邮箱"  
                           prefix={<MailOutlined />} 
                           value={email}
                           onChange={(e) => {
                            const value = e.target.value;
                            if(!value.includes(' ')){
                                setEmail(value);
                            }
                           }}/>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Input placeholder="请输入密码" 
                           type="password" 
                           prefix={<LockOutlined />}
                           value={password} 
                           onChange={(e) => {
                            const value = e.target.value;
                            if(!value.includes(' ')){
                                setPassword(value);
                            }
                            // setPassword(value);
                            handlePasswordChange(e);
                           }}
                           />
                </div>
                <div style={{marginBottom: '20px'}}>
                    <div style={{display: 'flex',alignItems: 'flex-start'}}>
                        <div style={{fontSize: '12px',color:'#666'}}>
                            密码强度：
                        </div>
                        <meter 
                            min="0" 
                            max="4"  // zxcvbn 的分数范围是 0-4
                            low="0" 
                            high="2" 
                            optimum="4" 
                            value={strength} // 设置密码强度
                        ></meter>
                    </div>
                    <div>
                        <div style={{color:'#666',fontSize: '10px',display:'flex',alignItems: 'flex-start'}}>
                            * 密码必须至少 6 个字符，可包含大写字母、小写字母、数字或特殊字符
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: '20px',display: 'flex'}}>
                    <div style={{marginRight: '10px'}}>
                        <Input placeholder="输入验证码" 
                               value={captcha} 
                               onChange={(e) => {
                                const value = e.target.value;
                                if(!value.includes(' ')){
                                    setCaptcha(value);
                                }
                               }}/>
                    </div>
                    <div>
                        <Button style={{fontFamily:'PingFang SC'}}>获取验证码</Button>
                    </div>
                </div>
                <div>
                    <Button type="primary" 
                            style={{width: '80%'}} 
                            onClick={handleRegister}>注册</Button>
                </div>
                <div className={styles.errorMessage}>
                    {errorMessage}
                </div>
            </div>   
        </div>
    )
}

export default Register;
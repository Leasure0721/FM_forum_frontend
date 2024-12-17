import React, { useState, useEffect } from 'react';
import styles from '../common.less'
import { Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { checkPasswordStrength, isInputEmpty, isEmailValid } from '../../../utils/validation';
import { useNavigate } from "react-router-dom";
import Logo from '../../../assets/svg/logo.svg';
import { useAuth } from '../../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../../redux/userSlice';

const Register = () => {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [strength, setStrength] = useState(0);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/login');
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);

        const strength = checkPasswordStrength(password);
        setStrength(strength);
    }

    const [captchabtnstyl, setCaptchabtnstyl] = useState(true);
    const [timer, setTimer] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        // 如果 timer > 0，设置每秒更新一次
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1); // 每秒减1
            }, 1000);

            // 清除定时器，防止内存泄漏
            return () => clearInterval(interval);
        } else {
            setDisabled(false); // timer 结束后，启用按钮
        }
    }, [timer]); // 依赖于 timer，timer 每次变化时都会触发 useEffect

    const [messageApi, contextHolder] = message.useMessage();

    const captchasuccess = () => {
        messageApi.open({
            type: 'success',
            content: '验证码发送成功，请注意查收！'
        })
    }

    const handleCaptcha = async () => {
        if (isInputEmpty(email)) {
            setErrorMessage('邮箱不为空');
            return;
        }

        setCaptchabtnstyl(false);
        setDisabled(true)
        setTimer(60);

        try {
            const response = await fetch('http://localhost:8081/users/sendCaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
            const data = await response.json();
            if (data.code === '200') {
                captchasuccess();
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('验证码发送失败，请稍后再试');
        }
    }

    const regsuccess = () => {
        messageApi.open({
            type: 'success',
            content: '注册成功，享受你的远山启动'
        })
    }

    const { login } = useAuth();

    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (isInputEmpty(name)) {
            setErrorMessage('用户名不为空');
            return;
        }
        if (name.length < 1 || name.length > 16) {
            setErrorMessage('用户名长度为 2 - 16 位');
            return;
        }
        if (isInputEmpty(email)) {
            setErrorMessage('邮箱不为空');
            return;
        }
        if (!isEmailValid(email)) {
            setErrorMessage('邮箱格式不正确');
            return;
        }
        if (isInputEmpty(password)) {
            setErrorMessage('密码不为空');
            return;
        }
        if (strength < 2) {
            setErrorMessage('密码强度不足，请重新输入');
            return;
        }
        if (isInputEmpty(captcha)) {
            setErrorMessage('验证码不为空');
            return;
        }

        try {
            const response = await fetch('http://localhost:8081/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    account: name,
                    mail: email,
                    password: password,
                    captcha: captcha
                })
            })
            const data = await response.json();
            if (data.code === '200') {

                dispatch(setUsername(data.data.account))

                regsuccess();
                login();
                setTimeout(() => {
                    navigate('/setup');
                }, 800)
            } else {
                setErrorMessage(data.msg);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('注册失败，请稍后再试');
        }
    }

    return (
        <div className={styles.Page}>
            {contextHolder}
            <div className={styles.Content}>
                <div className={styles.bcklogin} onClick={handleBack}>
                    <ArrowLeftOutlined style={{ marginTop: '4px', marginRight: '4px' }} /> 返回登录
                </div>
                <img src={Logo} alt='logo' />
                <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>
                    创建一个新的账号吧！
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input placeholder="请输入用户名"
                        prefix={<UserOutlined />}
                        value={name}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (!value.includes(' ')) {
                                setName(value);
                            }
                        }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input placeholder="请输入邮箱"
                        prefix={<MailOutlined />}
                        value={email}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (!value.includes(' ')) {
                                setEmail(value);
                            }
                        }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input.Password placeholder="请输入密码"
                        type="password"
                        prefix={<LockOutlined />}
                        value={password}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (!value.includes(' ')) {
                                setPassword(value);
                            }
                            // setPassword(value);
                            handlePasswordChange(e);
                        }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '12px', color: '#666' }}>
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
                        <div style={{ color: '#666', fontSize: '10px', display: 'flex', alignItems: 'flex-start' }}>
                            * 密码必须至少 6 个字符，可包含大写字母、小写字母、数字或特殊字符
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>
                        <Input placeholder="输入验证码"
                            value={captcha}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (!value.includes(' ')) {
                                    setCaptcha(value);
                                }
                            }} />
                    </div>
                    <div>
                        {captchabtnstyl ? <Button style={{ fontFamily: 'PingFang SC' }} onClick={handleCaptcha}>获取验证码</Button>
                            : <Button style={{ fontFamily: 'PingFang SC' }}
                                disabled={disabled}
                                onClick={handleCaptcha}>
                                {timer > 0 ? `已发送(${timer}s)` : '重新发送'}
                            </Button>
                        }
                        <span style={{ color: '#666', fontSize: '10px', marginLeft: '10px' }}>
                            验证码有效期为五分钟，请及时输入
                        </span>
                    </div>
                </div>
                <div>
                    <Button type="primary"
                        style={{ width: '80%' }}
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
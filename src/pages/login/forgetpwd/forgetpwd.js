import React from "react";
import styles from '../common.less'
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button } from "antd";
import { checkPasswordStrength,isInputEmpty,isEmailValid } from '../../../utils/validation';
import Logo from '../../../assets/svg/logo.svg';

const ForgetPwd = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/login');
    }

    const [email, setEmail] = React.useState('');
    const [captcha, setCaptcha] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errorMessages, setErrorMessages] = React.useState([]);
    const [strength, setStrength] = React.useState(0);


    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);

        const strength = checkPasswordStrength(password);
        setStrength(strength);
        console.log(strength);
    }

    const handleforgetPwd = () => {
        if(isInputEmpty(email)){
            setErrorMessages(['邮箱不为空']);
            return;
        }
        if(!isEmailValid(email)){
            setErrorMessages(['邮箱格式不正确']);
            return;
        }
        if(isInputEmpty(captcha)){
            setErrorMessages(['验证码不为空']);
            return;
        }
        if(isInputEmpty(password)){
            setErrorMessages(['密码不为空']);
            return;
        }
        if(isInputEmpty(confirmPassword)){
            setErrorMessages(['确认密码不为空']);
            return;
        }
        if(password !== confirmPassword){
            setErrorMessages(['两次密码输入不一致']);
            return;
        }
        if(strength < 2){
            setErrorMessages(['密码强度不足，请重新输入']);
            return;
        }

        setErrorMessages('');
    }

    return(
        <div className={styles.Page}>
            <div className={styles.Content}>
                <div className={styles.bcklogin} onClick={handleBack}>
                    <ArrowLeftOutlined style={{marginTop: '4px',marginRight: '4px'}}/> 返回登录
                </div>
                <img src={Logo} alt='logo' />
                <div style={{fontSize: '24px',fontWeight: '800',marginBottom: '20px'}}>
                    让我们帮你回忆密码吧！
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Input placeholder="请输入注册邮箱" 
                           prefix={<MailOutlined />}
                           value={email}
                           onChange={(e) => {
                            const value = e.target.value;
                            if(!value.includes(' ')){
                                setEmail(value);
                            }
                           }}/>
                </div>
                <div style={{marginBottom: '20px',display:'flex'}}>
                    <div style={{marginRight: '10px'}}>
                        <Input placeholder="请输入验证码" 
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
                <div style={{marginBottom: '20px'}}>
                    <Input.Password placeholder="请输入新密码" 
                                    prefix={<LockOutlined />}
                                    value={password}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if(!value.includes(' ')){
                                            setPassword(value);
                                        }
                                    handlePasswordChange(e);
                                       }}/>
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
                <div style={{marginBottom: '20px'}}>
                    <Input.Password placeholder="请再次输入新密码" 
                                    prefix={<LockOutlined />}
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if(!value.includes(' ')){
                                            setConfirmPassword(value);
                                        }
                                       }}/>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Button type="primary" style={{width: '80%'}} onClick={handleforgetPwd}>确 认</Button>
                </div>
                <div className={styles.errorMessage}>
                    {errorMessages}
                </div>
            </div>
        </div>
    )
}
export default ForgetPwd;
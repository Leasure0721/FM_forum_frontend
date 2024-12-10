import React from'react';
import styles from '../common.less'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { isInputEmpty, isEmailValid } from '../../../utils/validation';
import { MailOutlined } from '@ant-design/icons';
import Logo from '../../../assets/svg/logo.svg'

const EmailVer = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/login');
    }

    const [email, setEmail] = React.useState('');
    const [captcha, setCaptcha] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleemailver = () => {
        if (isInputEmpty(email)) {
            setErrorMessage('邮箱不为空！');
            return;
        }
        if (!isEmailValid(email)) {
            setErrorMessage('邮箱格式不正确！');
            return;
        }
        if (isInputEmpty(captcha)) {
            setErrorMessage('验证码不为空！');
            return;
        }

        setErrorMessage('');
        // TODO: 验证邮箱验证码
        // TODO: 登录成功后跳转到首页
    }

    return (
        <div className={styles.Page}>
            <div className={styles.Content}>
                <div className={styles.bcklogin} onClick={handleBack}>
                    <ArrowLeftOutlined style={{marginTop: '4px',marginRight: '4px'}}/> 返回登录
                </div>
                <img src={Logo} alt='logo' />
                <div style={{fontSize: '24px',fontWeight: '800',marginBottom: '20px'}}>
                    你也可以用邮箱验证登录！
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
                           }} />
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
                    <Button type="primary" style={{width: '80%'}} onClick={handleemailver}>登录</Button>
                </div>
                <div className={styles.errorMessage}>
                    {errorMessage}
                </div>
            </div> 
        </div>
    )
}

export default EmailVer;
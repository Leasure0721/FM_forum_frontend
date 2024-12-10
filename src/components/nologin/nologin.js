import React from "react";
import styles from './index.less'
import { FrownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const NoLogin = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.Page}>
            <div className={styles.Content}>
                <div className={styles.errorIcon}>
                    <FrownOutlined style={{ fontSize: '60px' , color: '#666' }} />    
                </div>
            <p className={styles.errorDescription}>抱歉，我们检测到您尚未登录，请先登录后再访问该页面。</p>
            <div className={styles.buttonContainer}>
            <Button  type="primary" onClick={() => navigate('/login')} className={styles.bkhomebtn}>
                登 录
            </Button>
            </div>
            </div>
        </div>
    )
}

export default NoLogin;
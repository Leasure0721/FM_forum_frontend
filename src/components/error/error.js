import React from 'react';
import styles from './error.less';
import { useNavigate } from "react-router-dom";
import { FrownOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>
          <FrownOutlined style={{ fontSize: '60px' , color: '#666' }} />
        </div>
        <h1 className={styles.errorMessage}>ERROR</h1>
        <p className={styles.errorDescription}>抱歉，我们遇到了一些问题。请稍后再试，或者点击下方按钮返回首页。</p>
        <div className={styles.buttonContainer}>
          <Button  type="primary" onClick={() => navigate('/home')} className={styles.bkhomebtn}>
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;

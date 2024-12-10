import React from "react";
import styles from './index.less'
import { TeamOutlined, CrownOutlined, VideoCameraOutlined, CustomerServiceOutlined, BookOutlined, UsbOutlined, CarOutlined } from '@ant-design/icons';

const Hot = () => {
    return (
        <div className={styles.hotpage}>
            <div style={{display: 'flex',minWidth:'1200px',maxWidth:'1200px',flexDirection:'column'}}>
                <div style={{marginBottom:'20px',display:'flex',justifyContent:'space-between'}}>
                    
                    <div>
                        <div className={styles.hotHeader}>
                            # 热门话题
                        </div>
                        <div className={styles.hotContainer}>

                        </div>
                    </div>

                    <div>
                        <div className={styles.hotHeader}>
                            <TeamOutlined /> 情感山崩
                        </div>
                        <div className={styles.hotContainer}>
                            <div style={{marginBottom:'10px',display:'flex',justifyContent:'space-between'}}>
                                <div className={styles.hottext}>
                                    <a href="/hot/1">这是测试111111111111111111111111111111111111</a>
                                </div>
                                <div style={{color:'#999'}}>
                                    热度 100.4w
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom:'20px',display:'flex',justifyContent:'space-between'}}>
                    
                    <div>
                        <div className={styles.hotHeader}>
                            <CrownOutlined /> 游戏流域
                        </div>
                        <div className={styles.hotContainer}>
                            112212
                        </div>
                    </div>

                    <div>
                        <div className={styles.hotHeader}>
                            <VideoCameraOutlined /> 影像山庄
                        </div>
                        <div className={styles.hotContainer}>

                        </div>
                    </div>
                    
                </div>
                <div style={{marginBottom:'20px',display:'flex',justifyContent:'space-between'}}>
                    
                    <div>
                        <div className={styles.hotHeader}>
                            <CustomerServiceOutlined /> 云上歌厅
                        </div>
                        <div className={styles.hotContainer}>
                            112212
                        </div>
                    </div>

                    <div>
                        <div className={styles.hotHeader}>
                            <BookOutlined /> 山间书屋
                        </div>
                        <div className={styles.hotContainer}>

                        </div>
                    </div>
                    
                </div>
                <div style={{marginBottom:'20px',display:'flex',justifyContent:'space-between'}}>
                    
                    <div>
                        <div className={styles.hotHeader}>
                            <UsbOutlined /> 野人科技
                        </div>
                        <div className={styles.hotContainer}>
                            112212
                        </div>
                    </div>
                    
                    <div>
                        <div className={styles.hotHeader}>
                            <CarOutlined /> 山友日常
                        </div>
                        <div className={styles.hotContainer}>

                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Hot;
import React, { useState } from'react';
import styles from './index.less'
import { Avatar, Input, Modal } from 'antd';
import Morenpic from '../../assets/img/default.png'
import { ManOutlined, WomanOutlined, CrownOutlined, SignatureOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import EditInfo from './editinfo/editinfo';
import { useDispatch, useSelector } from 'react-redux';
import { setSignature, setUsername, setGender, setAvatar } from '../../redux/userSlice';

const Userinfo = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };
    
    const username = useSelector(state => state.user.username);
    const signature = useSelector(state => state.user.signature);
    const gender = useSelector(state => state.user.gender);
    const avatar = useSelector(state => state.user.avatar);
    const createtime = useSelector(state => state.user.createtime);
    const dispatch = useDispatch();

    const handleUsernameChange = (newUsername) => {
        dispatch(setUsername(newUsername));
    }

    const handleSignatureChange = (newSignature) => {
        dispatch(setSignature(newSignature));
    }

    const handleGenderChange = (newGender) => {
        dispatch(setGender(newGender));
    }

    const handleAvatarChange = (newAvatar) => {
        dispatch(setAvatar(newAvatar));
    }

    return (
        <div className={styles.Page}>
            <div style={{width:'1400px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{width:'850px'}}>
                        
                        <div style={{padding:'30px',backgroundColor:'#666',borderRadius:'20px 20px 0 0'}}>
                            <div style={{display:'flex'}}>
                                <Avatar 
                                     src={avatar||<div style={{fontSize:'50px'}}>{username.charAt(0)}</div>} 
                                     size={120} alt='头像'  
                                     style={{border:'1px solid #ff6b6b'}}/>
                                
                                <div style={{marginLeft:'40px'}}>
                                    <div className={styles.usernamestyle}>
                                        {username}
                                       {gender === 'male' &&  <span className={styles.sexman}>
                                            <ManOutlined />
                                        </span>}
                                       {gender === 'female' &&  <span className={styles.sexwoman}>
                                            <WomanOutlined />
                                        </span>}
                                        {gender === 'other' &&  <span className={styles.sexalien}>
                                            👽
                                        </span>}
                                    </div>
                                    <div className={styles.signstyle}>
                                        {signature}
                                    </div>
                                    <div style={{color:'#999',marginTop:'10px'}}>
                                        第一次启动远山 ：{createtime}
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'flex-end',marginBottom:'-20px'}}>
                                <a style={{color:'#ccc',textDecoration:'none',cursor:'pointer'}} onClick={showModal}> 
                                    <SignatureOutlined /> 编辑信息
                                </a>
                                <Modal title={<div style={{fontFamily:'PingFang SC',fontSize:'18px',marginBottom:'20px'}}>想改头换面？</div>} 
                                       visible={visible} 
                                       width={720}
                                       footer={null}
                                       onCancel={handleCancel}>
                                        <EditInfo 
                                            username={username} onUsernameChange={handleUsernameChange}
                                            signature={signature} onSignatureChange={handleSignatureChange}
                                            gender={gender} onGenderChange={handleGenderChange}
                                            avatar={avatar} onAvatarChange={handleAvatarChange}
                                        />
                                </Modal>
                            </div>
                        </div>


                        <div style={{border:'5px solid #666',padding:'20px'}}>
                            <div style={{display:'flex'}}>
                                <div>
                                    <div className={styles.coverstyle} >
                                        {/* <img src={Morenpic}/> */}
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.titlestyle}>
                                        标题
                                    </div>
                                    <div className={styles.contentstyle}>
                                        容内容内容内容内容内容内容内容内容内容内容
                                        容内容内容内容内容内容内容内容内容内容内容
                                        容内容内容内容内容内容内容内容内容内容内容
                                        容内容内容内容内容内容内容内容内容内容内容
                                        容内容内容内容内容内容内容内容内容内容内容
                                    </div>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <div style={{display:'flex',color:'#999'}}>
                                            <div style={{marginRight:'10px'}}>
                                                <LikeOutlined /> 10
                                            </div>
                                            <div style={{marginRight:'10px'}}>
                                                <MessageOutlined /> 7
                                            </div>
                                            <div style={{marginRight:'10px'}}>
                                                <StarOutlined /> 8
                                            </div>
                                        </div>
                                        <div style={{color:'#999'}}>
                                            2021-08-01
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.datacontainer}>
                        <div className={styles.dataheader}>
                            数据
                        </div>
                        <div className={styles.datacontent}>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <div className={styles.dataitem}>
                                    关 注
                                    <div>
                                        ----
                                    </div>
                                </div>
                                <div>
                                    粉 丝 
                                    <div>
                                        ----
                                    </div>
                                </div>
                            </div>

                            <div className={styles.logdata}>
                                登录日志
                                <div className={styles.logitem}>
                                    <div>
                                        2021-08-01 10:00:00
                                    </div>
                                    <div className={styles.loginsuccess}>
                                        登录成功
                                    </div>
                                </div>

                                <div className={styles.logitem}>
                                    <div>
                                        2021-08-01 10:00:00
                                    </div>
                                    <div className={styles.loginfail}>
                                        登录失败
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userinfo;
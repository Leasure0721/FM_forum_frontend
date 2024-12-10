import React from "react";
import styles from './index.less'
import Morenpic from '../../assets/img/default.png'
import NoLogin from "../../components/nologin/nologin";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import FollowBtn from "../../components/followbtn/followbtn";
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

const Follow = () => {
    return (
        <div className={styles.Page}>
            {/* <NoLogin /> */}
            <div style={{display:'flex',justifyContent:'space-between',width:'1400px'}}>
                <div style={{minHeight:'800px'}}>
                    <div className={styles.followhead}>
                        ta 们发布的
                    </div>
                    <div>
                        <div className={styles.followcontainer}>
                            <div style={{width:'178px',height:'100px',background:'#666',marginRight:'50px'}} >
                            {/* <img src={Morenpic}/> */}
                            </div>
                            <div>
                                <div style={{fontSize:'20px',fontWeight:'600px',marginBottom:'1px'}}>
                                    标题
                                </div>
                                <div style={{ maxWidth: '550px',
                                                maxHeight: '50px',
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,  // 设置最大显示行数为 2 行
                                                textOverflow: 'ellipsis',
                                                fontSize: '14px',
                                                color: '#ccc',
                                                marginBottom:'10px'}}>
                                    容内容内容内容内容内容内容内容内容内容内容
                                    容内容内容内容内容内容内容内容内容内容内容
                                    容内容内容内容内容内容内容内容内容内容内容
                                    容内容内容内容内容内容内容内容内容内容内容
                                    容内容内容内容内容内容内容内容内容内容内容
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between',fontSize:'15px'}}>
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
                                        </div>
                                        <span>
                                            <Avatar size={24} icon={<UserOutlined />} style={{marginRight:'10px',border:'1px solid #FF6B6B'}}/>
                                            作者名字
                                            <span style={{marginLeft:'10px',color:'#999'}}>
                                                2021-08-01
                                            </span>
                                        </span> 
                                    </div>
                                </div>
                        </div>
                        <div className={styles.followcontainer}>
                            暂无内容
                        </div>
                    </div>
                </div>
                
                <div className={styles.followlistcontainer}>
                    <div className={styles.followlistheader}>
                        关注列表
                    </div>
                    <div>
                        <div className={styles.followlistcontent}>
                            <div style={{display:'flex'}}>
                                <div>
                                    <Avatar size={64} icon={<UserOutlined />} style={{border:'1px solid #FF6B6B'}}/>
                                </div>
                                <div style={{marginLeft:'20px'}}>
                                    <div style={{marginBottom:'10px'}}>
                                        用户名
                                    </div>
                                    <div style={{color:'#ccc'}}>
                                        什么也没说
                                    </div>
                                </div>
                            </div>

                            <div style={{marginTop:'15px'}}>
                                <FollowBtn />
                            </div>
                        </div>      
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Follow;
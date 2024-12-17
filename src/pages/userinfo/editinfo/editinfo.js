import { Avatar, ConfigProvider, DatePicker, Input, Tooltip } from "antd";
import React, { useState } from "react";
import styles from './index.less'
import UploadAvatar from "./uploadavatar";
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setSignature, setGender, setAvatar, setBirthday } from "../../../redux/userSlice";
import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";

import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const EditInfo = ({ username, onUsernameChange, signature, onSignatureChange, gender, onGenderChange, avatar, onAvatarChange }) => {

    const [newUsername, setNewUsername] = useState(username);
    const [newSignature, setNewSignature] = useState(signature);
    const [newGender, setNewGender] = useState(gender);
    const [newAvatar, setNewAvatar] = useState(avatar);
    const [newBirthday, setNewBirthday] = useState(null);
    const dispatch = useDispatch();

    // 更新用户名
    const handleUsernameChange = () => {
        if (newUsername.length > 0) {
            dispatch(setUsername(newUsername)); // 使用 setUsername 更新 Redux
            onUsernameChange(newUsername); // 传递更新到父组件
        }
    }

    // 更新个性签名
    const handleSignatureChange = () => {
        dispatch(setSignature(newSignature)); // 使用 setSignature 更新 Redux
        onSignatureChange(newSignature); // 传递更新到父组件
    }

    // 更新性别
    const handleGenderChange = (e) => {
        setNewGender(e);
        onGenderChange(e); // 传递更新到父组件
        dispatch(setGender(e)); // 使用 setGender 更新 Redux
    }

    // 更新头像
    const handleAvatarChange = (e) => {
        setNewAvatar(e);
        onAvatarChange(e); // 传递更新到父组件
        dispatch(setAvatar(e)); // 使用 setAvatar 更新 Redux
    }

    const birthday = useSelector(state => state.user.birthday);

    const handleBirthdayChange = (date, dateString) => {
        setNewBirthday(date); // 更新本地状态
        dispatch(setBirthday(dateString)); // 更新 Redux
    }



    return (
        <div>
            <div style={{ fontFamily: 'PingFang SC', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    {/* 用户名 */}
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ fontSize: '16px', marginTop: '3px', letterSpacing: '4px' }}>
                            用户名:
                        </div>
                        <Input
                            style={{ width: '300px', marginLeft: '10px' }}
                            maxLength={20}
                            showCount
                            value={newUsername}
                            placeholder="没有名字可不行哦o(╥﹏╥)o"
                            onChange={(e) => {
                                const value = e.target.value;
                                // 使用正则表达式替换空格
                                const newValue = value.replace(/\s/g, ''); // 去除所有空格字符
                                setNewUsername(newValue);
                            }}
                            onBlur={handleUsernameChange} // 失去焦点时更新用户名
                        />
                    </div>

                    {/* 性别 */}
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ fontSize: '16px', marginTop: '3px', letterSpacing: '4px' }}>
                            性 别：
                        </div>
                        <div style={{ display: 'flex', marginLeft: '10px' }}>
                            <Tooltip placement="bottom" title="男"> 
                                <button 
                                    className={styles.genderbtn}
                                    style={newGender === 'male' ? { backgroundColor: '#1890ff', color: '#fff' } : {}}
                                    onClick={() => handleGenderChange('male')}
                                    >
                                        ♂
                                </button>
                            </Tooltip>

                            <Tooltip placement="bottom" title="女">
                                <button 
                                    className={styles.genderbtn}
                                    style={newGender === 'female' ? { backgroundColor: '#ff69b4', color: '#fff' } : {}}
                                    onClick={() => handleGenderChange('female')}
                                    >
                                        ♀
                                </button>
                            </Tooltip> 

                            <Tooltip placement="bottom" title="外星人">
                                <button 
                                    className={styles.genderbtn}
                                    style={newGender === 'other' ? { backgroundColor: '#32cd32', color: '#fff' } : {}}
                                    onClick={() => handleGenderChange('other')}
                                    >
                                        👽
                                </button>
                            </Tooltip> 
                           
                        </div>
                    </div>

                    {/* 个性签名 */}
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ fontSize: '16px', marginTop: '3px' }}>
                            个性签名:
                        </div>
                        <Input.TextArea
                            style={{ width: '300px', marginLeft: '10px', height: '100px' }}
                            maxLength={100}
                            showCount
                            value={newSignature}
                            placeholder="写点什么吧...."
                            onChange={(e) => {
                                setNewSignature(e.target.value); // 更新签名
                            }}
                            onBlur={handleSignatureChange} // 失去焦点时更新签名
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault(); // 阻止换行
                                }
                              }}
                        />
                    </div>

                    {/* 生日 */}
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ fontSize: '16px', marginTop: '3px' }}>
                            我的生日:
                        </div>
                        <ConfigProvider locale={locale}>
                            <DatePicker 
                                        value={newBirthday}
                                        style={{ width: '300px', marginLeft: '10px' }} 
                                        placeholder={birthday? birthday : '请选择生日'}
                                        onChange={handleBirthdayChange}
                                        />
                        </ConfigProvider>
                    </div>
                </div>

                {/* 上传头像 */}
                <div style={{ display: 'flex', marginBottom: '30px' }}>
                    <div style={{ fontSize: '16px', marginTop: '48px' }}>
                        修改头像:
                    </div>
                    <div>
                        <UploadAvatar 
                                onAvatarChange={handleAvatarChange} 
                                avatar={newAvatar}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditInfo;

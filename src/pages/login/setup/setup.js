import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../common.less'
import Logo from '../../../assets/svg/logo.svg';
import { Input, Tooltip, ConfigProvider, DatePicker, Button } from 'antd';
import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setSignature, setGender, setAvatar, setBirthday } from '../../../redux/userSlice';

import 'dayjs/locale/zh-cn';
import UploadAvatar from '../../userinfo/editinfo/uploadavatar';

const Setup = () => {
    const [image, setImage] = useState('')
    const [newgender, setnewGender] = useState('')
    const [newsignature, setnewSignature] = useState('')
    const [newavatar, setnewAvatar] = useState('')
    const [newbirthday, setnewBirthday] = useState('')
    const dispatch = useDispatch()

    const handleSignatureChange = (e) => {
        const signature = e.target.value
        setnewSignature(signature);
        dispatch(setSignature(newsignature));
    };

    const handleGenderChange = (gender) => {
        setnewGender(gender);
        dispatch(setGender(gender));  // 直接使用传入的 gender
    };

    const handleAvatarChange = (avatar) => {
        setnewAvatar(avatar);
        dispatch(setAvatar(avatar));
    }

    const handleBirthdayChange = (date, dateString) => {
        setnewBirthday(dateString);
        dispatch(setBirthday(dateString))
    }

    const [errormsg, setErrorMsg] = useState('')
    const navigate = useNavigate();
    const account = useSelector(state => state.user.username)


    const handleStart = async() => {
        if (!newsignature || !newgender || !newavatar || !newbirthday) {
            setErrorMsg('请填写完整信息!')
            return;
        }

        try{
            const response = await fetch('http://localhost:8081/users/updateUserInfo',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    account:account,
                    signature:newsignature,
                    gender:newgender,
                    avatar:newavatar,
                    birthday:dayjs(newbirthday).format('YYYY-MM-DD')
                })
            })
        }catch(error){
            console.log(error)
            setErrorMsg('网络错误，请稍后再试！')
        }

        setErrorMsg('')
        navigate('/home')
    }

    return (
        <div className={styles.Page}>
            <div className={styles.Content} style={{ maxWidth: "800px" }}>
                <img src={Logo} alt='logo' />
                <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>
                    让我们了解你！
                </div>
                <div style={{ fontFamily: 'PingFang SC', display: 'flex', justifyContent: 'space-between' }}>
                    <div>

                        {/* 性别 */}
                        <div style={{ display: 'flex', marginBottom: '30px' }}>
                            <div style={{ fontSize: '16px', marginTop: '3px', letterSpacing: '2px' }}>
                                你的性别是？
                            </div>
                            <div style={{ display: 'flex', marginLeft: '10px' }}>
                                <Tooltip placement="bottom" title="男">
                                    <button
                                        className={styles.genderbtn}
                                        style={newgender === 'male' ? { backgroundColor: '#1890ff', color: '#fff' } : {}}
                                        onClick={() => handleGenderChange('male')}
                                    >
                                        ♂
                                    </button>
                                </Tooltip>

                                <Tooltip placement="bottom" title="女">
                                    <button
                                        className={styles.genderbtn}
                                        style={newgender === 'female' ? { backgroundColor: '#ff69b4', color: '#fff' } : {}}
                                        onClick={() => handleGenderChange('female')}
                                    >
                                        ♀
                                    </button>
                                </Tooltip>

                                <Tooltip placement="bottom" title="外星人">
                                    <button
                                        className={styles.genderbtn}
                                        style={newgender === 'other' ? { backgroundColor: '#32cd32', color: '#fff' } : {}}
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
                                签名彰显个性！
                            </div>
                            <Input.TextArea
                                style={{ width: '300px', minHeight: '100px', marginLeft: '10px' }}
                                maxLength={100}
                                showCount
                                placeholder="写点什么吧...."
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\n/g, '');  // 移除换行符
                                    setnewSignature(value);
                                }}
                                onBlur={handleSignatureChange} // 失去焦点时更新个性签名
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault(); // 阻止换行
                                    }
                                }}
                            />
                        </div>

                        {/* 生日 */}
                        <div style={{ display: 'flex', marginBottom: '30px' }}>
                            <div style={{ fontSize: '16px', marginTop: '3px', letterSpacing: '2.5px' }}>
                                你的生日是？
                            </div>
                            <ConfigProvider locale={locale}>
                                <DatePicker
                                    style={{ width: '300px', marginLeft: '10px' }}
                                    placeholder={'请选择生日'}
                                    onChange={handleBirthdayChange}
                                />
                            </ConfigProvider>
                        </div>
                    </div>

                    {/* 上传头像 */}
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ fontSize: '16px', marginTop: '48px' }}>
                            上传你的头像吧！
                        </div>
                        <div>
                            <UploadAvatar onAvatarChange={handleAvatarChange}
                                avatar={newavatar} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button
                        style={{ marginTop: '30px', width: '40%', letterSpacing: '4px' }}
                        onClick={handleStart}>
                        启动远山
                    </Button>
                    <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                        {errormsg}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Setup;
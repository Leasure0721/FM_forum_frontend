import React, { useState } from'react';
import styles from '../common.less'
import Logo from '../../../assets/svg/logo.svg';
import { Input, Tooltip, ConfigProvider, DatePicker, Button} from 'antd';
import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { useDispatch } from 'react-redux';
import { setUsername,setSignature,setGender,setAvatar } from '../../../redux/userSlice';

import 'dayjs/locale/zh-cn';
import UploadAvatar from '../../userinfo/editinfo/uploadavatar';

const Setup = () => {
    const [image, setImage] = useState('')
    const [newusername, setnewUsername] = useState('')
    const [newgender, setnewGender] = useState('')
    const [newsignature, setnewSignature] = useState('')
    const [newavatar, setnewAvatar] = useState('')
    const [newbirthday, setnewBirthday] = useState('')
    const dispatch = useDispatch()

    const handleUpload = (e) => {
        const file = e.target.files[0]
        if (file){
            const reader = new FileReader()
            reader.onload = () => {
                const baseImage = reader.result;
                setImage(reader.result)  // 读取图片base64编码
            }
            reader.readAsDataURL(file)  // 读取文件内容
        }
    }

    const handleUsernameChange = (e) => {
        const username = e.target.value
        if (username.length >= 0) {
            setnewUsername(username);
            dispatch(setUsername(newusername));
        }
    };
    

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
        dispatch(setAvatar(newavatar));
    }

    return (    
        <div className={styles.Page}>
            <div className={styles.Content} style={{maxWidth:"700px"}}>
                <img src={Logo} alt='logo' />
                <div style={{fontSize: '24px',fontWeight: '800',marginBottom: '20px'}}>
                    让我们了解你！
                </div>
                <div style={{ fontFamily: 'PingFang SC', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        {/* 用户名 */}
                        {/* <div style={{ display: 'flex', marginBottom: '30px' }}>
                            <div style={{ fontSize: '16px', marginTop: '3px', letterSpacing: '4px' }}>
                                用户名:
                            </div>
                            <Input
                                style={{ width: '300px', marginLeft: '10px' }}
                                maxLength={20}
                                showCount
                                placeholder="没有名字可不行哦o(╥﹏╥)o"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    // 使用正则表达式替换空格
                                    const newValue = value.replace(/\s/g, ''); // 去除所有空格字符
                                   setnewUsername(newValue);
                                }}
                                onBlur={handleUsernameChange} // 失去焦点时更新用户名
                                onKeyDown={(e) => {
                                    if (e.key === 'Space') {
                                        e.preventDefault(); // 阻止空格输入
                                    }
                                }}
                            />
                        </div> */}

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
                                        style={newgender=== 'other' ? { backgroundColor: '#32cd32', color: '#fff' } : {}}
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
                                style={{ width: '300px',minHeight: '100px', marginLeft: '10px'}}
                                maxLength={100}
                                showCount
                                placeholder="写点什么吧...."
                                onChange={(e) => {
                                    const value =  e.target.value.replace(/\n/g, '');  // 移除换行符
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
                            <div style={{ fontSize: '16px', marginTop: '3px',letterSpacing:'2.5px' }}>
                                你的生日是？
                            </div>
                            <ConfigProvider locale={locale}>
                                <DatePicker style={{ width: '300px', marginLeft: '10px' }} placeholder="请选择日期"/>
                            </ConfigProvider>
                        </div>
                    </div>

                    {/* 上传头像 */}
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ fontSize: '16px', marginTop: '48px' }}>
                            修改头像:
                        </div>
                        <div>
                            <UploadAvatar onAvatarChange={handleAvatarChange} avatar={newavatar} image={image} onUpload={handleUpload}/>
                        </div>
                    </div>


                </div>

                <Button style={{marginTop: '30px', width: '50%',letterSpacing: '4px'}}>
                    启动远山
                </Button>
            </div>

        </div>
    );
}

export default Setup;
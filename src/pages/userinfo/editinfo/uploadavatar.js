import React, { useState } from 'react';
import styles from './index.less';
import { Avatar, Tooltip, message } from 'antd';

const UploadAvatar = ({ onAvatarChange, avatar }) => {
    const [image, setImage] = useState(null);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // 判断文件大小是否超过 2MB
            if (file.size > 2 * 1024 * 1024) {
                message.error('图片过大，请重新选择！'); // 显示提示信息
                return;
            }

            // 创建一个 Image 对象来检查图片的尺寸
            const img = new Image();
            const reader = new FileReader();

            reader.onload = () => {
                img.onload = () => {
                    // 检查图片的宽高是否小于120px
                    if (img.width < 120 || img.height < 120) {
                        message.error('图片尺寸过小,请重新选择！');
                    } else {
                        // 图片尺寸合格，读取图片的 base64 编码
                        const baseImage = reader.result;
                        onAvatarChange(baseImage);
                        setImage(baseImage); // 更新图片
                    }
                };
                img.src = reader.result; // 设置图片源
            };

            reader.readAsDataURL(file); // 读取文件内容
        }
    };

    return (
        <Tooltip placement="bottom" title="上传头像">
            <div
                className={styles.uploadcover}
                onClick={() => document.getElementById('imageInput').click()}
                style={{
                    backgroundImage: image ? `url(${image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {!image && <Avatar src={avatar} size={120} />}
                <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }} // 隐藏文件上传控件
                    onChange={handleUpload}
                />
            </div>
        </Tooltip>
    );
};

export default UploadAvatar;

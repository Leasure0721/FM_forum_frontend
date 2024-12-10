import React, { useState } from'react';
import styles from './index.less'

const UploadAvatar = ({ onAvatarChange,avatar}) => {
    const [image,setImage] = useState(null)
    
    const handleUpload = (e) => {
        const file = e.target.files[0]
        if (file){
            const reader = new FileReader()
            reader.onload = () => {
                const baseImage = reader.result;
                onAvatarChange(baseImage)
                setImage(reader.result)  // 读取图片base64编码
            }
            reader.readAsDataURL(file)  // 读取文件内容
        }
    }
    
    return (
        <div className={styles.uploadcover}
             onClick={() => document.getElementById('imageInput').click()}
             style={{
                    backgroundImage: image ? `url(${image})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
            {!image && <div>上传头像</div>}
            <input
                id="imageInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }} // 隐藏文件上传控件
                onChange={handleUpload}
            />
            
        </div>
    )
}

export default UploadAvatar;
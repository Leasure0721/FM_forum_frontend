import React, { useState, useEffect, useRef } from "react";
import styles from './index.less'
import FMEditor from "./Editor/editor";
import { Button, Divider, Input, Modal } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { TeamOutlined, CrownOutlined, VideoCameraOutlined, CustomerServiceOutlined, BookOutlined, UsbOutlined, CarOutlined } from "@ant-design/icons";
import Part from "./part/part";
import Topic from "./topic/topic";

const Create = () => {
    const [image, setImage] = useState(null);
    const [showtopic, setShowtopic] = useState(false);
    const [topiccontent, setTopiccontent] = useState("选择话题");

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result); // 设置图片的 base64 数据
            };
            reader.readAsDataURL(file); // 读取文件为 DataURL
        }
    };

    const ontopicClick = () => {
        setShowtopic(true);
    }

    const closeTopic = (topic) => {
        setTopiccontent(topic);
        setShowtopic(false);
    }


    return (
        <div className={styles.createpage}>
            <div className={styles.createtitle}>
                = 创作你的内容 =
            </div>
            <FMEditor />
            <div className={styles.uploadcontainer}>
                <div className={styles.uploadfirst}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginTop: '5px', marginRight: '10px' }}>
                            标题
                        </div>
                        <div>
                            <Input placeholder="请输入标题" variant="filled" maxLength={20} showCount style={{ width: '400px' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', width: '40%' }}>
                        <div style={{ marginTop: '40px', marginRight: '10px' }}>
                            封面
                        </div>
                        <div className={styles.uploadcover}
                            onClick={() => document.getElementById('imageInput').click()}
                            style={{
                                backgroundImage: image ? `url(${image})` : "none",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {!image && "上传图片"}
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }} // 隐藏文件上传控件
                                onChange={handleUpload}
                            />

                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex', marginBottom: '5px', marginTop: '20px' }}>
                    <div style={{ marginRight: '10px', marginTop: '25px' }}>
                        摘要
                    </div>
                    <div>
                        <Input.TextArea placeholder="请输入摘要" variant="filled" maxLength={200} showCount style={{ width: '870px', height: '70px' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', marginBottom: '5px', marginTop: '20px' }}>
                    <div style={{ marginRight: '10px', marginTop: '3px' }}>
                        分区
                    </div>
                    <Part />
                </div>

                <div style={{ display: 'flex', marginBottom: '5px', marginTop: '20px' }}>
                    <div style={{ marginRight: '10px', marginTop: '3px' }}>
                        话题
                    </div>
                    <div>
                        <button className={styles.partbtn} onMouseEnter={ontopicClick}>
                            # {topiccontent}
                        </button>
                        {showtopic && <Topic closeTopic={closeTopic} />}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="primary" style={{ marginRight: '10px' }}>发布</Button>
                    <Button style={{ marginRight: '10px' }}>保存草稿</Button>
                </div>
            </div>
        </div>
    )
}

export default Create;
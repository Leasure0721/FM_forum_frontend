import React, { useState } from 'react';
import styles from '../message.less';
import { Avatar, Input } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const initialMessages = new Array(10).fill(null).map((_, index) => ({
    name: `名字`,
    time: `时间`,
    content: `消息内容`,
    count: true, // 初始状态为显示
}));

const MyMsg = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
        // 更新消息状态，将相应消息的 count 状态设为 false
        setMessages((prevMessages) =>
            prevMessages.map((msg, i) => (i === index ? { ...msg, count: false } : msg))
        );
    };

    console.log(selectedIndex)

    return (
        <div className={styles.Content} style={{ display: 'flex' }}>
            <div style={{
                width: '20%',
                borderRight: '1px solid #ccc',
                overflow: 'auto',
            }}>
                {messages.map((msg, index) => (
                    <div
                        className={`${styles.mymsgleftitem} ${selectedIndex === index ? styles.userselected : ''}`}
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        <Avatar size={56} />
                        <div className={styles.msgleftcontent}>
                            <div className={styles.msgleftname}>
                                <div style={{
                                        width:'100px',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                     }}>{msg.name}</div>
                                <div className={styles.leftitem}>{msg.time}</div>
                            </div>
                            <div className={styles.msgleftname}>
                                <div className={styles.leftitem}
                                     style={{
                                        marginRight: '10px',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                     }}>{msg.content}</div>
                                {/* 根据 count 属性判断是否显示 */}
                                {msg.count && <div className={styles.count}></div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedIndex === null ? 
              <div style={{display:'flex', justifyContent:'center',width:'80%',marginTop:'50px',color:'#999'}}>
                 您还未选中或者发起聊天，快去跟好友聊一聊吧 
              </div> : <div style={{width:'80%',marginLeft:'5px'}}>
                    <div className={styles.righttitle}>
                        <div>
                            {messages[selectedIndex].name}
                        </div>
                        <div className={styles.reporticon}>
                            <EllipsisOutlined />
                        </div>
                    </div>
                    <div 
                       className={styles.rightcontent}>
                        <div style={{display:'flex',justifyContent:'flex-start'}}>
                            <Avatar size={38} />
                            <div style={{marginLeft:'10px',
                                         padding:'10px',
                                         background:'#f5f5f5',
                                         borderRadius:'5px',
                                         maxWidth:'800px',
                                         wordWrap: 'break-word'}}
                                         >
                                {messages[selectedIndex].content}
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'flex-end',marginTop:'10px'}}>
                            <div style={{marginRight:'10px',
                                         padding:'10px',
                                         background:'#ff6b6b',
                                         color:'#fff',
                                         borderRadius:'5px',
                                         maxWidth:'800px',
                                         wordWrap: 'break-word'}}>
                              121212
                            </div>
                            <Avatar size={38}/>
                        </div>
                        
                    </div>
                    <div>
                        <Input.TextArea
                                showCount
                                maxLength={500}
                                placeholder="请输入消息内容"
                                className={styles.input}
                                style={{
                                    resize: 'none',
                                }}
                        />
                    </div>
                    
                </div>}
        </div>
    );
};

export default MyMsg;
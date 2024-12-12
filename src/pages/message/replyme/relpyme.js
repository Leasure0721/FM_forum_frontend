import React from "react";
import styles from '../message.less'
import {Avatar} from 'antd'

const initialReply = new Array(10).fill(null).map((_, index) => ({
    name: `名字`,
    time: `时间`,
    content: `消息内容 `,
    from:'一篇文章'
}));

const ReplyMe = () => {
    const [replyList, setReplyList] = React.useState(initialReply);
    
    return (
        <div className={styles.Content}>
            <div style={{height: '100%',
                         overflow: 'auto'}}>
                {replyList.map((item, index) => (
                    <div style={{
                        display: 'flex',
                        justifyContent:'space-between',
                        borderBottom:'1px solid #e8e8e8',
                        padding: '10px 20px',
                        }}
                        key={index}
                  >
                      <div style={{display: 'flex'}}>
                          <Avatar size={40} />
                          <div style={{marginLeft: '10px'}}>
                              <div>
                                  <span style={{fontSize: '16px', fontWeight: 'bold'}}>
                                    {item.name+' '} 
                                  </span>
                                    在
                              </div>
                              <div>
                                  出自 
                                  <span style={{color: '#999'}}>
                                    {' ' + item.from}
                                  </span>
                              </div>
                              <div style={{
                                        marginRight: '10px',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        width:'1200px'
                                     }}>
                                  回复你：{item.content}
                              </div>
                          </div>
                      </div>
  
                      <div>
                           时间
                      </div>
                  </div>
                ))}
                
                
            </div>
        </div>
    )
}

export default ReplyMe;
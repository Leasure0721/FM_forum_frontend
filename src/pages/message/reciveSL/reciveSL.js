import React, { useState } from'react';
import styles from '../message.less'
import { LikeFilled, StarFilled } from '@ant-design/icons';
import { Avatar } from 'antd';

const initialSL = new Array(10).fill(null).map((_, index) => ({
    name: `名字`,
    time: `时间`,
    content: index % 2 === 0 ? <StarFilled /> : <LikeFilled />, 
    from:'一篇文章'
}));

const ReciveSL = () => {
    const [recivedSL, setRecivedSL] = useState(initialSL);

    return (
        <div className={styles.Content}>
             <div style={{height: '100%',
                         overflow: 'auto'}}>
                {recivedSL.map((item, index) => (
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
                                  给了你一个<span className={styles.iconrSL}>
                                        {item.content}
                                    </span>
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

export default ReciveSL;
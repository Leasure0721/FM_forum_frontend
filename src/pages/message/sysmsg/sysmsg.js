import React, { useState } from "react";
import styles from '../message.less'
import { Avatar } from 'antd';

const initialSysMsg = new Array(10).fill(null).map((_, index) => ({
    sysname: `名字`,
    type: `类型`,
    content: `内容`,
    time: `时间`,
}));

const SysMsg = () => {
    const [SysMsglist, setSysMsglist] = useState(initialSysMsg);

    return (
        <div className={styles.Content}>
            <div style={{
                         height: '100%',
                         overflow: 'auto',
                        }}
            >
              {SysMsglist.map((item, index) => (
                <div style={{
                    display: 'flex',
                    justifyContent:'space-between',
                    borderBottom: '1px solid #e8e8e8',
                    padding: '10px 20px'
                    }}
                    className={styles.listhover}
                    key={index}
                >
                    <div style={{display:'flex'}}>
                        1212
                    </div>
                </div>
              ))}  
            </div>
        </div>
    )
}

export default SysMsg;
import React from "react";
import styles from '../message.less'

const initialSysMsg = new Array(10).fill(null).map((_, index) => ({
    sysname: `名字`,
    type: `类型`,
    content: `内容`,
    time: `时间`,
}));

const SysMsg = () => {
    return (
        <div className={styles.Content}>

        </div>
    )
}

export default SysMsg;
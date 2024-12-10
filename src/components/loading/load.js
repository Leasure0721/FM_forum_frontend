import React from'react'
import styles from './index.less'
import { LoadingOutlined } from '@ant-design/icons'

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.text} style={{marginBottom: '10px'}}>
                我总在等待
            </div>
            <div style={{marginBottom: '20px', fontSize: '18px'}}>
                Loading...
            </div>
            <LoadingOutlined style={{fontSize: '50px', color: '#FF6B6B'}}/>
        </div>
    )
}

export default Loading
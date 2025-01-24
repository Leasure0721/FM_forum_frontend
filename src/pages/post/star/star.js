import React, { useState } from'react';
import {StarFilled, PlusCircleFilled} from '@ant-design/icons';
import {Modal} from 'antd';
import styles from './star.less'

const Star = () => {
    const [isVisable, setIsVisable] = useState(false);

    const showModal = () => {
        setIsVisable(true);
    }
    const handleCancel = () => {
        setIsVisable(false);
    }
    const handleOk = () => {
        setIsVisable(false);
    }

    return (
        <div>
            <div onClick={showModal}  className={styles.star}>
                <StarFilled/>  100 
            </div>
             <Modal
                visible={isVisable}
                onOk={handleOk}
                onCancel={handleCancel}
                className={styles.modal}
                okText="确定"
                cancelText="取消"
             >
                <div className={styles.title}>
                    添加收藏夹
                </div>
                <div className={styles.createStar}>
                    <PlusCircleFilled /> 新建收藏夹
                </div>
                <div className={styles.starList}>
                    <div className={styles.starItem}>
                        <div>
                         默认收藏夹
                        </div>
                        <div>
                            (0/100)
                        </div>
                    </div>
                </div>
             </Modal>
        </div>
    )
}

export default Star;
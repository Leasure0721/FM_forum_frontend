import React from 'react';
import { Dropdown, Menu } from 'antd';
import { EyeInvisibleOutlined, EllipsisOutlined, WarningOutlined } from '@ant-design/icons';
import styles from './moreEvent.less';

const eventitems = [
    {
        key: '1',
        label: (
            <span>
                <EyeInvisibleOutlined /> 屏蔽该用户
            </span>
        )
    },
    {
        key: '2',
        label: (
            <span>
                <WarningOutlined /> 举报
            </span>
        )
    }
];

const MoreEvent = () => {
    return (
        <div>
            <Dropdown
                overlay={<Menu items={eventitems} />} // 使用 Menu 并传递 items
            >
                <div>
                    <EllipsisOutlined />
                </div>
            </Dropdown>
        </div>
    );
};

export default MoreEvent;

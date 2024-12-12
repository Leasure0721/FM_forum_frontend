import React, { useEffect, useState } from'react';
import styles from './message.less';
import { Menu, Tabs } from 'antd';
import MyMsg from './mymsg/mymsg';
import ReplyMe from './replyme/relpyme';
import ReciveSL from './reciveSL/reciveSL';
import { useLocation, useParams } from 'react-router-dom';
import SysMsg from './sysmsg/sysmsg';

const Messageitems = [
    {
        label: '我的消息',
        key: 'message',
        children: (<MyMsg />)
    },
    {
        label: '回复我的',
        key: 'comment',
        children: (<ReplyMe />)
    },
    {
        label: '赞和收藏',
        key: 'like',
        children: (<ReciveSL />)
    },
    {
        label: '系统消息',
        key: 'system',
        children: (<SysMsg />)
    }
]

const Message = () => {
    const clickitems = (e) => {
        console.log('点了',e)
    }

    const {tabId} = useParams();
    const location = useLocation();

    useEffect(() => {
        if(tabId && !isNaN(tabId)){
            setDefaultTab(tabId);
        }
    }, [location, tabId]);

    const [defaultTab, setDefaultTab] = useState(tabId || '1')

    return (
        <div className={styles.Page}>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{background:'#fff',
                             padding:'10px',
                             borderRadius:'10px',
                             border:'1px solid #ff6b6b',
                }}>
                    <Tabs defaultActiveKey={defaultTab} 
                          onChange={clickitems} 
                          items={Messageitems}
                          style={{fontFamily:'PingFang SC',
                                  width:'1400px'}}>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Message;
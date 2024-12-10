import React from 'react';
import { Tabs } from 'antd'; // 假设您使用的是 Ant Design 的 Tabs 组件
import styles from './index.less'
import { CustomerServiceOutlined, TeamOutlined, VideoCameraOutlined, CrownOutlined, BookOutlined, UsbOutlined, CarOutlined, GiftOutlined } from '@ant-design/icons';

const sorteditems = [
  {
    key: 'recommend',
    label: (
        <div >
          <GiftOutlined /> 推 荐
        </div>
    ),
    children: (
        <div style={{background:'#545454',padding:'10px',color:'#fff'}}>
            推荐
        </div>
    )
  },
  {
    key: 'emotions',
    label: (
        <div>
          <TeamOutlined /> 情感山崩
        </div>
    ),
    children: (
        <div>
          <div style={{background:'#545454',padding:'10px',color:'#fff',marginBottom:'10px'}}>
            情感山崩
          </div>
          <div style={{background:'#545454',padding:'10px',color:'#fff',marginBottom:'10px'}}>
            情感山崩
          </div>
        </div>
    )
  },
  {
    key: 'game',
    label: (<div>
              <CrownOutlined /> 游戏流域
            </div>),
    children: (
        <div style={{background:'#545454',padding:'10px',color:'#fff'}}>
            游戏流域
        </div>
    )
  },
  {
    key: 'film',
    label: (
        <div>
          <VideoCameraOutlined /> 影像山庄
        </div>
    ),
    children: (
        <div style={{background:'#545454',padding:'10px',color:'#fff'}}>
            影像山庄
        </div>
    )
  },
  {
    key: 'music',
    label: (<div>
              <CustomerServiceOutlined /> 云上歌厅
            </div>),
    children: (
        <div style={{background:'#545454',padding:'10px',color:'#fff'}}>
            云上歌厅
        </div>
    )
  },
  {
    key: 'study',
    label: (<div>
              <BookOutlined /> 山间书屋
            </div>),
    children: (
        <div style={{background:'#545454',padding:'10px',color:'#fff'}}>
            山间书屋
        </div>
    )
  },
  {
    key: 'technology',
    label: (
      <div>
        <UsbOutlined /> 野人科技
      </div>
    ),
    children: (
        <div style={{background:'#545454',padding:'10px',color:'#fff'}}>
            野人科技
        </div>
    )
  },
  {
    key: 'life',
    label: (
      <div>
        <CarOutlined /> 山友日常
      </div>
    ),
    children: (
        <div style={{background:'#545454',padding:'10px',color:'#fff'}}>
            山友日常
        </div>
    )
  },
];

const CustomTabs = () => {
  return (
    <div style={{ marginTop: '20px', border: '5px solid #666', borderRadius: '10px 10px 0 0' }}>
      <div style={{ background: '#666', padding: '5px', color: '#fff'}}>
        <Tabs defaultActiveKey='recommend' items={sorteditems} 
        style={{fontFamily:'PingFang SC',padding:'5px'}}/>
      </div>
    </div>
  );
};

export default CustomTabs;

import React from 'react';
import { Calendar, Button, message, ConfigProvider } from 'antd';
import styles from './index.less'
import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";

import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const CDR = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onSelect = (value, mode) => {
    if (mode?.source === 'month') {
      return;
    }
    const today = new Date();
    const selectedDate = value.toDate();

    const isToday = today.getFullYear() === selectedDate.getFullYear() &&
      today.getMonth() === selectedDate.getMonth() &&
      today.getDate() === selectedDate.getDate();

      if (isToday) {
        messageApi.success('今日已签到');
      }else{
        messageApi.error('仅能签到当天');
      }
  }


  return (
    <div >
      {contextHolder}
      <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        每天记得签到哦 ^^
      </div>
      <ConfigProvider locale={locale}>
        <Calendar fullscreen={false} onSelect={onSelect}/>
      </ConfigProvider>
      <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
      </div>
    </div>
  );
};
export default CDR;
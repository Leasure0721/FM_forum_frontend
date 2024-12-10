import { TreeSelect } from "antd";
import React, { useState } from "react";
import styles from './index.less'

const partData =[
    {
        value: 'emoton',
        title:'情感山崩'
    },
    {
        value:'game',
        title:'游戏流域'
    },
    {
        value:'movie',
        title:'影像山庄'
    },
    {
        value:'music',
        title:'云上歌厅'
    },
    {
        value:'study',
        title:'山间书屋'
    },
    {
        value: 'technology',
        title: '野人科技'
    },
    {
        value: 'life',
        title: '山友日常'
    }
]

const Part = () => {
    const [value, setValue] = useState();
    
    const onChange = (newValue) => {
        setValue(newValue)
    }

    const onPopupSrool = (e) => {
        console.log(e)
    }


    return (
        <div>
            <TreeSelect
                value={value}
                dropdownStyle={{fontFamily:'PingFang SC'}}
                placeholder="请选择你的分区"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
                treeData={partData}
                onPopupScroll={onPopupSrool}
                style={{ width: '160px',letterSpacing:'2px' }}
            />
        </div>
    )
}

export default Part;
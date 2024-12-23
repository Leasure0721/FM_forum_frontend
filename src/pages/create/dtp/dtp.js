import React, { useState } from "react";
import { Select } from 'antd';

const Dtp = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [options, setOptions] = useState([
        { label: '情感故事', value: '情感故事' },
        { label: '失恋笔记', value: '失恋笔记' },
        { label: '玩家心得', value: '玩家心得' },
        { label: '攻略秘籍', value: '攻略秘籍' },
        { label: '游戏文化', value: '游戏文化' },
        { label: '观影随笔', value: '观影随笔' },
        { label: '影评解读', value: '影评解读' },
        { label: '影视爆料', value: '影视爆料' },
        { label: '乐评推荐', value: '乐评推荐' },
        { label: '音乐创作', value: '音乐创作' },
        { label: '学习笔记', value: '学习笔记' },
        { label: '考试攻略', value: '考试攻略' },
        { label: '知识分享', value: '知识分享' },
        { label: '技术分享', value: '技术分享' },
        { label: '科技趣谈', value: '科技趣谈' },
        { label: '生活感悟', value: '生活感悟' },
        { label: '日常记录', value: '日常记录' },
        { label: '兴趣探索', value: '兴趣探索' },
    ]);


    const handleChange = (value) => {
        if (value.length <= 1) {
            setSelectedTags(value);
        }
        console.log(`selected: ${value}`);
        console.log(options);
    };

    const handleBlur = () => {
        // 遍历输入框中的值并检查是否存在于 options 中
        selectedTags.forEach((tag) => {
            if (!options.some((option) => option.value === tag)) {
                // 如果不存在，则添加到 options 中
                setOptions((prevOptions) => [
                    ...prevOptions,
                    { label: tag, value: tag },
                ]);
            }
        });
    };

    return (
        <div>
            <Select
                mode="tags"
                allowClear
                style={{ width: '870px' }}
                placeholder="选择要参与的话题，也可以输入自定义话题"
                onChange={handleChange}
                onBlur={handleBlur} // 失去焦点时触发保存操作
                options={options}
                value={selectedTags}
            />
        </div>
    );
}

export default Dtp;
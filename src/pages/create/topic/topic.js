import React, { useState } from 'react';
import { Select } from 'antd';
import './index.less';

const Topic = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [options, setOptions] = useState([
        { label: '# 远山开张', value: '1' },
        { label: '# 远山开张', value: '2' },
        { label: '# 远山开张', value: '3' },
        { label: '# 远山开张', value: '4' },
    ])

    const handleChange = (value) => {
        if (value.length <= 5) {
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
                placeholder="请选择话题,也可以输入自己的话题"
                onChange={handleChange}
                onBlur={handleBlur} // 失去焦点时触发保存操作
                options={options}
                value={selectedTags}
                suffixIcon={<span>{selectedTags.length}/5</span>}
            />
        </div>
    );
};

export default Topic;

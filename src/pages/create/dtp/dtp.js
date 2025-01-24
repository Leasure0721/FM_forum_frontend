import React, { useState } from "react";
import { Select } from 'antd';
import { options } from "../../../mock/dtp";

const Dtp = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleChange = (value) => {
        if (value.length <= 1) {
            setSelectedTags(value);
        }
    };

    return (
        <div>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '870px' }}
                placeholder="选择要参与的话题"
                onChange={handleChange}
                options={options}
                value={selectedTags}
            />
        </div>
    );
}

export default Dtp;
import React, { useState } from "react";
import ReactQuill from "react-quill";
import Quill from "quill"; // 导入 Quill
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css"; // 确保样式正确导入
import styles from './index.less';

// 注册插件
Quill.register('modules/imageResize', ImageResize); 

const FMEditorv2 = () => {
    const [value, setValue] = useState("");

    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ header: [1, 2, false] }],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
            [{align: [ "justify","center", "right"]}],
            ["link", "image"],
            ["clean"],
            [{ size: ["small", false, "large", "huge"] }],
            [{ color: [] }, { background: [] }]
        ],
        imageResize: {
            parchment: Quill.import("parchment")
        }
    };

    const handleChangeValue = (value) => {
        console.log('富文本的值：', value);
        setValue(value);
    };
    
    return (
        <div>
            <ReactQuill
                theme="snow"
                modules={modules}
                value={value}
                onChange={handleChangeValue}
                style={{ width: '100%'}}
            />
        </div>
    );
};

export default FMEditorv2;

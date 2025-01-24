import { Button, Image,Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./index.less";

const { TextArea } = Input;

const TAI = () => {
  // 初始化图片数组，假设开始时没有图片
  const [images, setImages] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 处理文件上传的函数
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onloadend = () => {
            if (reader.result) {
              resolve(reader.result);
            }
          };
          reader.readAsDataURL(file); // 读取图片文件为base64格式
        });
      });

      // 上传完毕后更新 images 数组
      Promise.all(newImages).then((base64Images) => {
        setImages((prevImages) => [...prevImages, ...base64Images]); // 将新上传的图片添加到现有数组中
      });
    }
  };

  const handleDelete = (index) => {
    // 删除对应图片
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div style={{ width: "100%", height:'auto'}}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* 显示所有图片 */}
        {images.map((image, index) => (
          <div key={index} style={{ display: "flex", marginRight: "20px" }}>
            <div
              style={{
                position: "relative",
                width: "178px",
                height: "100px",
                margin: "10px",
                overflow: "hidden",
              }}
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              <img
                src={image}
                alt={`image-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {hoveredIndex === index && ( 
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleDelete(index)}
                >
                  <DeleteOutlined
                    style={{ color: "white", fontSize: "24px" }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* 上传按钮 */}
      <Button
        style={{ marginTop: "10px" }}
        onClick={() => document.getElementById("fileInput").click()}
      >
        上传图片
      </Button>
      {/* 隐藏的文件上传输入框，点击按钮触发 */}
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileChange}
        multiple
        style={{ display: "none" }}
      />
      <Input className={styles.titlestyle} placeholder="请输入标题" maxLength={30} allowClear/>
      <TextArea 
          showCount 
          className={styles.contentstyle} 
          placeholder="请输入内容" 
          maxLength={1000}
          style={{resize: 'none'}}/>
    </div>
  );
};

export default TAI;

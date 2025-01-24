import React, { useState } from "react";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./index.less";

const VideoUpload = () => {
  const [videoUrl, setVideoUrl] = useState(null); // 存储视频的URL

  // 处理文件选择
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video")) {
      const videoFileUrl = URL.createObjectURL(file); // 创建视频文件的URL
      setVideoUrl(videoFileUrl); // 更新视频URL
    } else {
      alert("请选择一个视频文件");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {videoUrl ? (
        <div
          style={{
            marginBottom: "20px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: "10px",fontWeight:'600' }}>视频预览</div>
          <video
            controls
            src={videoUrl}
            style={{ maxWidth: "70%", height: "auto" }}
          />
          <Button 
            onClick={() => document.getElementById("videofile").click()}
            style={{marginTop: "20px"}}>
            重新上传
          </Button>
        </div>
      ) : (
        <Button onClick={() => document.getElementById("videofile").click()} style={{fontSize: "24px",width:'auto',height:'auto',marginTop: "10%"}}>
          <UploadOutlined />上传视频
        </Button>
      )}

      <input
        id="videofile"
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default VideoUpload;

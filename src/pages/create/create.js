import React, { useState, useEffect, useRef } from "react";
import styles from "./index.less";
import FMEditor from "./Editor/editor";
import { Button, Divider, Input, Modal, Tabs } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import {
  TeamOutlined,
  CrownOutlined,
  VideoCameraOutlined,
  CustomerServiceOutlined,
  BookOutlined,
  UsbOutlined,
  CarOutlined,
} from "@ant-design/icons";
import Part from "./part/part";
import Topic from "./topic/topic";
import { useSelector } from "react-redux";
import NoLogin from "../../components/nologin/nologin";
import Dtp from "./dtp/dtp";
import FMEditorv2 from "./Editor/ver2/v2_FMEditor";
import TAI from "./TAI/tai";
import VideoUpload from "./Video/videoupload";

const Createtype = [
  {
    key: "1",
    label: "发布图文",
    children: <TAI />,
  },
  {
    key: "2",
    label: "发布文章",
    children: <FMEditorv2 />,
  },
  {
    key: "3",
    label: "发布视频",
    children: <VideoUpload />,
  },
];

const Create = () => {
  const [image, setImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // 设置图片的 base64 数据
      };
      reader.readAsDataURL(file); // 读取文件为 DataURL
    }
  };

  const isLogin = useSelector((state) => state.auth.isLogin);
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div>
      {!isLogin ? (
        <NoLogin />
      ) : (
        <div className={styles.createpage}>
          <div className={styles.createtitle}>= 创作你的内容 =</div>
          <div
            style={{
              padding: "20px",
              background: "#fff",
              borderRadius: "5px",
              border: "2px solid #ff6b6b",
              marginBottom: "20px",
            }}
          >
            <Tabs
              defaultActiveKey="1"
              items={Createtype}
              style={{
                width: "1350px",
                fontFamily: "PingFang SC",
                display: "flex",
                flexWrap: "wrap",
                userSelect: "none",
                minHeight:'500px'
              }}
              size="large"
              onChange={(key) => setCurrentIndex(key)}
            />
          </div>
          {/* <FMEditor /> */}
          {/* <FMEditorv2 /> */}
          <div className={styles.uploadcontainer}>
            {currentIndex !== "1" && (
              <div>
                <div className={styles.uploadfirst}>
                  <div style={{ display: "flex" }}>
                    <div
                      className={styles.titlefont}
                      style={{ marginTop: "5px" }}
                    >
                      标题
                    </div>
                    <div>
                      <Input
                        placeholder="请输入标题"
                        variant="filled"
                        maxLength={20}
                        showCount
                        style={{ width: "400px" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", width: "40%" }}>
                    <div
                      className={styles.titlefont}
                      style={{ marginTop: "40px" }}
                    >
                      封面
                    </div>
                    <div
                      className={styles.uploadcover}
                      onClick={() =>
                        document.getElementById("imageInput").click()
                      }
                      style={{
                        backgroundImage: image ? `url(${image})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {!image && "上传图片"}
                      <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }} // 隐藏文件上传控件
                        onChange={handleUpload}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "5px",
                    marginTop: "20px",
                  }}
                >
                  <div
                    className={styles.titlefont}
                    style={{ marginTop: "25px" }}
                  >
                    摘要
                  </div>
                  <div>
                    <Input.TextArea
                      placeholder="请输入摘要，这会显示在预览中"
                      variant="filled"
                      maxLength={150}
                      showCount
                      style={{ width: "870px", height: "70px", whiteSpace: 'nowrap'  }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              style={{
                display: "flex",
                marginBottom: "5px",
                marginTop: "20px",
              }}
            >
              <div className={styles.titlefont} style={{ marginTop: "3px" }}>
                分区
              </div>
              <Part />
            </div>

            <div
              style={{
                display: "flex",
                marginBottom: "5px",
                marginTop: "20px",
              }}
            >
              <div className={styles.titlefont} style={{ marginTop: "3px" }}>
                标签
              </div>
              <div>
                <Topic />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "5px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  marginRight: "34px",
                  marginTop: "3px",
                  letterSpacing: "0.5px",
                }}
              >
                参与话题
              </div>
              <div>
                <Dtp />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="primary" style={{ marginRight: "10px" }}>
                发布
              </Button>
              <Button style={{ marginRight: "10px" }}>保存草稿</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;

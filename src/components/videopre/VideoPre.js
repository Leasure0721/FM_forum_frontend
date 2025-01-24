import styles from "./index.less";
import demoVideo from '../../assets/video/test.MP4'
import { UserOutlined, LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useLocation } from "react-router-dom";

const VideoPre = () => {
  const location = useLocation();
  const width = location.pathname === '/home' ? '1400px' : '800px';
  
  return (
    <div className={styles.followcontainer}>
      <div>
        <div
          style={{ fontSize: "20px", fontWeight: "600px", marginBottom: "1px" }}
        >
          标题
        </div>
        <div
          style={{
            marginTop: "20px",
            width: width,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src={demoVideo}
            controls="controls"
            style={{
                width:'60%',
                aspectRatio: '16 / 9',
                backgroundColor: '#000',
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "15px",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", color: "#999" }}>
              <div style={{ marginRight: "10px" }}>
                <LikeOutlined /> 10
              </div>
              <div style={{ marginRight: "10px" }}>
                <MessageOutlined /> 7
              </div>
              <div style={{ marginRight: "10px" }}>
                <StarOutlined /> 8
              </div>
            </div>
          </div>
          <span>
            <Avatar
              size={24}
              icon={<UserOutlined />}
              style={{ marginRight: "10px", border: "1px solid #FF6B6B" }}
            />
            作者名字
            <span style={{ marginLeft: "10px", color: "#999" }}>
              2021-08-01
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPre;

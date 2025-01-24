import styles from "./index.less";
import { Image } from "antd";
import Default from "../../assets/img/default.png";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { useLocation } from "react-router-dom";

const TAIpre = () => {
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
            maxWidth: width,
            maxHeight: "50px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            textOverflow: "ellipsis",
            fontSize: "14px",
            color: "#ccc",
            marginBottom: "10px",
          }}
        >
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容
        </div>
        <div>
          <Image.PreviewGroup>
            <div style={{ display: "flex", gap: "10px" }}>
              {" "}
              {/* 设置图片间隔 */}
              <Image
                width={150}
                height={150}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                style={{ objectFit: "contain" }}
              />
              <Image
                width={150}
                height={150}
                src={Default}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Image.PreviewGroup>
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
            作者名字211111111111111111111
            <span style={{ marginLeft: "10px", color: "#999" }}>
              2021-08-01
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TAIpre;

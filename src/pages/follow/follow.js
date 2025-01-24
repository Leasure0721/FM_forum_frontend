import React from "react";
import styles from "./index.less";
import Morenpic from "../../assets/img/default.png";
import NoLogin from "../../components/nologin/nologin";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import FollowBtn from "../../components/followbtn/followbtn";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import ArticalPre from "../../components/articalpre/articalpre";
import TAIpre from "../../components/TAIpre/taipre";
import VideoPre from "../../components/videopre/VideoPre";

const Follow = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div>
      {!isLogin ? (
        <NoLogin />
      ) : (
        <div className={styles.Page}>
          {/* <NoLogin /> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1400px",
            }}
          >
            <div style={{ minHeight: "800px" }}>
              <div className={styles.followhead}>ta 们发布的</div>
              <div>
                <ArticalPre />
                <TAIpre />
                <VideoPre />
                <div className={styles.followcontainer}>暂无内容</div>
              </div>
            </div>

            <div className={styles.followlistcontainer}>
              <div className={styles.followlistheader}>关注列表</div>
              <div>
                <div className={styles.followlistcontent}>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Avatar
                        size={64}
                        icon={<UserOutlined />}
                        style={{ border: "1px solid #FF6B6B" }}
                      />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ marginBottom: "10px" }}>用户名</div>
                      <div style={{ color: "#ccc" }}>什么也没说</div>
                    </div>
                  </div>

                  <div style={{ marginTop: "15px" }}>
                    <FollowBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Follow;

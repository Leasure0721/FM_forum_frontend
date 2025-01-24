import React, { useState } from "react";
import styles from "./index.less";
import { Image, Modal } from "antd";
import {
  ManOutlined,
  WomanOutlined,
  SignatureOutlined,
  HistoryOutlined,
  StarOutlined,
} from "@ant-design/icons";
import EditInfo from "./editinfo/editinfo";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  setSignature,
  setUsername,
  setGender,
  setAvatar,
} from "../../redux/userSlice";
import NoLogin from "../../components/nologin/nologin";
import ArticalPre from "../../components/articalpre/articalpre";
import TAIpre from "../../components/TAIpre/taipre";
import VideoPre from "../../components/videopre/VideoPre";

const Userinfo = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/users/updateUserInfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            account: username,
            signature: signature,
            gender: gender,
            avatar: avatar,
            birthday: dayjs(birthday).format("YYYY-MM-DD"),
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
    setVisible(false);
  };

  const username = useSelector((state) => state.user.username);
  const signature = useSelector((state) => state.user.signature);
  const gender = useSelector((state) => state.user.gender);
  const avatar = useSelector((state) => state.user.avatar);
  const birthday = useSelector((state) => state.user.birthday);
  const createtime = useSelector((state) => state.user.createtime);
  const dispatch = useDispatch();

  const handleUsernameChange = (newUsername) => {
    console.log(username, newUsername);
    dispatch(setUsername(newUsername));
  };

  const handleSignatureChange = (newSignature) => {
    dispatch(setSignature(newSignature));
  };

  const handleGenderChange = (newGender) => {
    dispatch(setGender(newGender));
  };

  const handleAvatarChange = (newAvatar) => {
    dispatch(setAvatar(newAvatar));
  };

  const { isLogin } = useSelector((state) => state.auth);

  return (
    <div>
      {!isLogin ? (
        <NoLogin />
      ) : (
        <div className={styles.Page}>
          <div style={{ width: "1400px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "850px" }}>
                <div
                  style={{
                    padding: "30px",
                    backgroundColor: "#666",
                    borderRadius: "20px 20px 0 0",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Image
                      src={
                        avatar || (
                          <div style={{ fontSize: "50px" }}>
                            {username.charAt(0)}
                          </div>
                        )
                      }
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid #ff6b6b",
                      }}
                      preview={{
                        mask: (
                          <div style={{ fontFamily: "PingFang SC" }}>查看</div>
                        ),
                        maskClassName: styles.antimagemask,
                      }}
                    />

                    <div style={{ marginLeft: "40px" }}>
                      <div className={styles.usernamestyle}>
                        {username}
                        {gender === "man" && (
                          <span className={styles.sexman}>
                            <ManOutlined />
                          </span>
                        )}
                        {gender === "female" && (
                          <span className={styles.sexwoman}>
                            <WomanOutlined />
                          </span>
                        )}
                        {gender === "other" && (
                          <span className={styles.sexalien}>👽</span>
                        )}
                      </div>
                      <div className={styles.signstyle}>{signature}</div>
                      <div style={{ color: "#999", marginTop: "10px" }}>
                        第一次启动远山 ：{createtime}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "-20px",
                    }}
                  >
                    <a
                      style={{
                        color: "#ccc",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      onClick={showModal}
                    >
                      <SignatureOutlined /> 编辑信息
                    </a>
                    <Modal
                      title={
                        <div
                          style={{
                            fontFamily: "PingFang SC",
                            fontSize: "18px",
                            marginBottom: "20px",
                          }}
                        >
                          想改头换面？
                        </div>
                      }
                      visible={visible}
                      width={720}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <EditInfo
                        username={username}
                        onUsernameChange={handleUsernameChange}
                        signature={signature}
                        onSignatureChange={handleSignatureChange}
                        gender={gender}
                        onGenderChange={handleGenderChange}
                        avatar={avatar}
                        onAvatarChange={handleAvatarChange}
                      />
                    </Modal>
                  </div>
                </div>

                <div style={{ width: "850px" }}>
                  <ArticalPre />
                  <TAIpre />
                  <VideoPre />
                </div>
              </div>
              <div className={styles.datacontainer}>
                <div className={styles.dataheader}>数据</div>
                <div className={styles.datacontent}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={styles.dataitem}>
                      关 注<div>----</div>
                    </div>
                    <div>
                      粉 丝<div>----</div>
                    </div>
                  </div>
                  <div className={styles.HSdiv}>
                    <HistoryOutlined />{" "}
                    <span style={{ marginLeft: "5px" }}>历史浏览</span>
                  </div>
                  <div className={styles.HSdiv}>
                    <StarOutlined />{" "}
                    <span style={{ marginLeft: "5px" }}>我的收藏</span>
                  </div>
                  <div className={styles.logdata}>
                    登录日志
                    <div className={styles.logitem}>
                      <div>2021-08-01 10:00:00</div>
                      <div className={styles.loginsuccess}>登录成功</div>
                    </div>
                    <div className={styles.logitem}>
                      <div>2021-08-01 10:00:00</div>
                      <div className={styles.loginfail}>登录失败</div>
                    </div>
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

export default Userinfo;

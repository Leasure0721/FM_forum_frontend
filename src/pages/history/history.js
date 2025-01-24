import React from "react";
import { useSelector } from "react-redux";
import NoLogin from "../../components/nologin/nologin";
import styles from "./index.less";
import HSdetails from "../../components/HSdetails/hsdetails";
import { Button } from "antd";

const History = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const [yesToday, setYesToday] = React.useState([
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
  ]);

  const [early, setEarly] = React.useState([
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
    <HSdetails />,
  ]);

  const [clear, setClear] = React.useState(false);

  return (
    <div>
      {!isLogin ? (
        <NoLogin />
      ) : (
        <div className={styles.Page}>
          <div className={styles.container}>
            <div className={styles.historyTitle}>
              <div>浏览历史</div>
              <div>
                <Button
                  style={{ fontFamily: "PingFang SC" }}
                  onClick={() => {
                    setYesToday([]);
                    setEarly([]);
                    setClear(true);
                  }}
                >
                  清空历史
                </Button>
              </div>
            </div>
            {!clear ? (
              <div>
                <div className={styles.historyContent}>
                  <div className={styles.timeline}>昨天</div>
                  <div>
                    {yesToday.map((item, index) => {
                      return <div key={index}>{item}</div>;
                    })}
                  </div>
                </div>

                <div className={styles.historyContent}>
                  <div className={styles.timeline}>更早</div>
                  <div>
                    {early.map((item, index) => {
                      return <div key={index}>{item}</div>;
                    })}
                  </div>
                </div>
              </div>
            ):(
              <div className={styles.noHistory}>
                暂无历史记录
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default History;

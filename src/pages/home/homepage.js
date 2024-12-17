import { Avatar, Carousel } from 'antd';
import React from 'react';
import styles from './index.less'
import CustomTabs from './content/customtabs';
import { useNavigate } from 'react-router-dom';
import Morenpic from '../../assets/img/default.png'
import CDR from './calendar/ver1/CDR';
import { useAuth } from '../../context/AuthContext';


const HomePage = () => {
  const navigate = useNavigate();

  const { isLogin } = useAuth();

  return (
    <div className={styles.homepage}>
      <div className={styles.homecontainer}>
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <Carousel
                autoplay autoplaySpeed={5000}
                arrows infinite={true}
                style={{ width: '800px', marginRight: '50px' }}>
                <div>
                  <div className={styles.carouselsitem}>
                    {/* <img src={Morenpic} style={{width:'640px',height:'360px',marginTop:'10px',marginBottom:'20px'}} /> */}
                    <div style={{ fontFamily: 'PingFang SC', fontSize: '18px' }}>
                      祝贺开张
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.carouselsitem}>

                    <div style={{ fontFamily: 'PingFang SC', fontSize: '18px' }}>
                      活动酬宾
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.carouselsitem}>
                    <div style={{ fontFamily: 'PingFang SC', fontSize: '18px' }}>
                      毕业快乐
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.carouselsitem}>
                    <div style={{ fontFamily: 'PingFang SC', fontSize: '18px' }}>
                      广告招租
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className={styles.newscontainer}>
              <div style={{
                padding: '10px',
                backgroundColor: '#666',
              }}>
                今日热门
              </div>
              <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                <a href="/news/1" className={styles.todaynews}>1</a>
                <a href="/news/1" className={styles.todaynews}>2</a>
                <a href="/news/1" className={styles.todaynews}>3</a>
                <a href="/news/1" className={styles.todaynews}>4</a>
                <a href="/news/1" className={styles.todaynews}>5</a>
                <a href="/news/1" className={styles.todaynews}>6</a>
                <a href="/news/1" className={styles.todaynews}>7</a>
                <a href="/news/1" className={styles.todaynews}>8</a>
                <a href="/news/1" className={styles.todaynews}>9</a>
                <a href="/news/1" className={styles.todaynews}>10</a>
              </div>
            </div>
          </div>

          <CustomTabs />
        </div>

        <div>
          <div className={styles.userinfocontainer}>
            <div className={styles.userinfoheader}>
              <div>
                <Avatar size={64} style={{ border: '1px solid #FF6B6B', cursor: 'pointer' }} onClick={() => navigate('/login')}>登录</Avatar>
              </div>
              <div style={{ padding: '10px 10px 10px 0', cursor: 'pointer' }} onClick={() => navigate('/login')}>
                未登录
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ padding: '10px' }}>
                  <div>
                    关 注
                  </div>
                  <div>
                    ----
                  </div>
                </div>
                <div style={{ padding: '10px' }}>
                  <div>
                    粉 丝
                  </div>
                  <div>
                    ----
                  </div>
                </div>
              </div>
            </div>
            <div >
              <CDR />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
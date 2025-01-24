import React from "react";
import styles from "./tai.less";
import { Carousel } from "antd";

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#666',
  };

const TAI = () => {
  return (
        <div className={styles.Page}>
            <div className={styles.Post}>
                <div>
                    {/* <Carousel arrows infinite={false}>
                        <div><h1 style={contentStyle}>第一张图片</h1></div>
                        <div><h1 style={contentStyle}>第二张图片</h1></div>
                    </Carousel> */}
                    
                </div>
            </div>
        </div>
    );
};

export default TAI;
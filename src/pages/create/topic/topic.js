import React from 'react';
import styles from './index.less';
import { Input } from 'antd';

const Topic = ({ closeTopic }) => {
    const topics = ["这是话题1", "这是话题2", "这是话题3", "这是话题4", "这是话题5", "这是话题6", "这是话题7", "这是话题8"];

    const handleTopicClick = (topic) => {
        closeTopic(topic); // 将所选话题传递给父组件
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '460px' }}>
            {topics.map((topic, index) => (
                <button key={index} className={styles.partbtn} onClick={() => handleTopicClick(topic)}>
                    {topic}
                </button>
            ))}
        </div>
    )
}

export default Topic;

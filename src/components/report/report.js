import React, { useState } from "react";
import { Modal, Input, Button } from 'antd';
import styles from './report.less';
import { EyeInvisibleOutlined, EllipsisOutlined, WarningOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const reportTypes = [
    "恶意广告",
    "人身攻击",
    "骚扰行为",
    "虚假信息",
    "低质量内容",
    "色情内容",
    "版权侵权",
    "其他"
];

const Report = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [reportContent, setReportContent] = useState("");

    // 显示模态框
    const showModal = () => {
        setIsModalVisible(true);
    };

    // 关闭模态框
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // 提交举报
    const handleOk = () => {
        if (selectedTags.length === 0) {
            setErrorMessage("举报类型是必选的");
            return;
        }
        // 在此可以执行提交的逻辑，如发送请求等
        setIsModalVisible(false);
        console.log("举报成功，选择的类型:", selectedTags);
        console.log("举报详情:", reportContent);
    };

    // 处理标签点击
    const handleTagClick = (tag) => {
        setSelectedTags(prevSelectedTags => {
            setErrorMessage("");
            if (prevSelectedTags.includes(tag)) {
                // 如果当前标签已经被选中，则取消选择
                return prevSelectedTags.filter(t => t !== tag);
            } else if (prevSelectedTags.length < 3) {
                // 如果未选中且当前选中的标签少于3个，则添加到已选中标签列表
                return [...prevSelectedTags, tag];
            } else {
                // 如果已经选中3个标签，则输出提示信息
                setErrorMessage("您最多只能选三个举报原因");
                return prevSelectedTags;
            }
        });
    };

    return (
        <div className={styles.report}>
            <a className={styles.reportbutton} onClick={showModal}>
               举报
            </a>

            <Modal
                title={<div style={{ fontFamily: 'PingFang SC', fontSize: '20px' }}>举报反馈</div>}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
                okText="提交"
                cancelText="取消"
            >
                <div className={styles.reportcontainer}>
                    {/* 举报类型选择 */}
                    <div className={styles.reporttagscontainer}>
                        <div className={styles.reporttitle}>
                            举报类型 （必选）
                            <span className={styles.errormessage}>{errorMessage}</span>
                        </div>
                        <div className={styles.tagcontainer}>
                            {reportTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className={`${styles.reporttag} ${selectedTags.includes(type) ? styles.selected : ''}`}
                                    onClick={() => handleTagClick(type)}
                                >
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 举报详情输入 */}
                    <div className={styles.reportinputcontainer}>
                        <div className={styles.reporttitle}>
                            举报详情原因 （选填）
                        </div>
                        <TextArea
                            showCount
                            maxLength={200}
                            placeholder="请输入举报原因"
                            style={{ resize: 'none' }}
                            value={reportContent}
                            onChange={(e) => setReportContent(e.target.value)}
                            className={styles.reportcontent}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Report;

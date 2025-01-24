import React, { useState } from "react";
import styles from './post.less'
import { Avatar, Modal, Button } from 'antd';
import { SwapOutlined, EyeFilled, StarFilled, LikeFilled, DislikeFilled } from '@ant-design/icons';
import Report from '../../components/report/report'
import CommentBox from "./comment/comment";
import FollowBtn from '../../components/followbtn/followbtn'
import Star from "./star/star";

const Post = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const tags = ['学习', '学习', '学习', '学习', '学习'];

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    }

    const [commentLike, setCommentLike] = useState(0); // 评论点赞数
    const [hasLiked, setHasLiked] = useState(false); // 当前用户是否已经点赞

    const onLikeClick = () => {
        if (!hasLiked) {
            setHasLiked(true);
            setCommentLike(commentLike + 1);
        } else {
            setHasLiked(false);
            setCommentLike(commentLike - 1);
        }
    }

    return (
        <div className={styles.Page}>
            <div className={styles.Post}>
                <h1>标题</h1>
                <div className={styles.writerInfo}>
                    <div className={styles.writerAvatarContainer}>
                        <Avatar className={styles.writerAvatar} />
                    </div>
                    <div>
                        <div className={styles.writerInfoContent}>
                            <a href="#" className={styles.writerName}>作者名字</a>
                            <div className={styles.publishTime}>
                                <SwapOutlined className={styles.icon} />
                                发布于 2021-08-01 12:00:00
                            </div>
                            <div className={styles.Count}>
                                <EyeFilled className={styles.icon}  />
                                阅读量 1000
                            </div>
                            <div className={styles.Count}>
                                <StarFilled className={styles.icon} />
                                收藏 100
                            </div>
                            <div className={styles.Count}>
                                <LikeFilled className={styles.icon} />
                                点赞 100
                            </div>
                        </div>

                        <div className={styles.partfooter}>
                            <div className={styles.icon}>
                                分区:
                                <button className={styles.partbtn}>
                                    云上书屋
                                </button>
                            </div>

                            <div className={styles.icon}>
                                话题:
                                <button className={styles.partbtn}>
                                    # 今天看什么书
                                </button>
                            </div>  
                            <div className={styles.icon}>
                                标签:
                                {tags.map((tag, index) => (
                                    <button key={index} className={styles.partbtn}>
                                        {tag}
                                    </button>
                                ))}
                                <button className={styles.partbtn}>
                                    学习
                                </button>
                            </div>
                        </div>

                    </div>
                    <div style={{ marginLeft: '500px' }}>
                        <Report />
                    </div>
                </div>
                <div className={styles.content}>
                    这是文章内容
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerleft}>
                        <Avatar className={styles.footeravatar} />
                        <span className={styles.footername}>作者名字</span>
                        <span className={styles.footerflwbtn}>
                            <FollowBtn />
                        </span>
                    </div>
                    <div className={styles.footerright}>
                        <span className={styles.footericon}
                            onClick={onLikeClick}
                            style={{ color: hasLiked ? '#ff6b6b' : '#666' }}
                        >{hasLiked ? '取消点赞' : '点赞'} <LikeFilled /> {commentLike}
                        </span>
                        <span className={styles.footericon}>
                            <Star />
                        </span>
                    </div>
                </div>
            </div>



            <CommentBox />
        </div>
    )
}

export default Post;
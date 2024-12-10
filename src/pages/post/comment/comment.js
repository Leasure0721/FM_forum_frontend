import React, { useState, useRef } from 'react';
import { Avatar, Modal } from 'antd';
import { CloseCircleFilled, LikeOutlined, PictureOutlined, UploadOutlined, EllipsisOutlined } from '@ant-design/icons';
import styles from './comment.less';
import MoreEvent from './moreEvent/moreEvent';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [reply, setReply] = useState('');
  const [images, setImages] = useState([]); // 存储上传的图片 URL
  const commentInputRef = useRef(null); // 用于获取 textarea 引用
  const [errorMsg, setErrorMsg] = useState(''); // 错误提示信息

  const handleImageUpload = (e) => {
    setErrorMsg('');
    const file = e.target.files[0];
    if (file) {
      // 限制最多上传 9 张图片
      if (images.length < 9) {
        const reader = new FileReader();
        reader.onload = () => {
          // 将图片的 Base64 URL 添加到图片列表
          setImages((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file); // 读取图片为 base64
      } else {
        setErrorMsg("最多只能上传 9 张图片");
      }
    }
  };

  const handleDelete = (index) => {
    const updatImg = images.filter((_, i) => i!== index);
    setImages(updatImg);
  };
  

  const [visible, setVisible] = useState(false); //图片预览框是否可见
  const [currentImage, setCurrentImage] = useState(''); //当前预览的图片

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setVisible(true);
  }

  const handleClose = () => {
    setVisible(false);
    setCurrentImage('');
  }

  const [showcloses, setShowcloses] = useState(false);

  const [showReply, setShowReply] = useState(true); 

  const handleReply = () => {
    setShowReply(!showReply);
  }

  const [commentLike, setCommentLike] = useState(0); // 评论点赞数
  const [hasLiked, setHasLiked] = useState(false); // 当前用户是否已经点赞

  const onLikeClick = () => {
    if (!hasLiked) {
      setHasLiked(true);
      setCommentLike(commentLike + 1);
    }else {
      setHasLiked(false);
      setCommentLike(commentLike - 1);
    }
  }

  return (
    <div className={styles.comment}>
      {/* 评论输入框 */}
      <div className={styles.sendcomment}>
        <Avatar className={styles.commentAvatar} />
        <div>
          <textarea
            ref={commentInputRef}
            placeholder="写下你的评论..."
            className={styles.commentInput}
            maxLength={1000}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>

      {/* 已上传的图片 */}
      <div className={styles.uploadedImages}>
        {images.map((image, index) => (
          <div className={styles.imagecontainer}
               onMouseEnter={() => setShowcloses(true)}
               onMouseLeave={() => setShowcloses(false)}
          >
                <img
                    key={index}
                    src={image}
                    alt={`上传的图片${index + 1}`}
                    width="178"
                    height="100"
                    objectFit="scale-down"
                    style={{ margin: '10px', borderRadius: '8px', cursor: 'zoom-in' }}
                    onClick={() => handleImageClick(image)}
                />

                {/* 删除按钮 */}
                {showcloses && (
                  <div
                    className={styles.deleteicon}
                    onClick={() => handleDelete(index)}
                  >
                    <CloseCircleFilled />
                  </div>
                )}

                <Modal
                    visible={visible}
                    onCancel={handleClose}
                    footer={null}
                    width="50%"
                    className={styles.commentbig}
                    >
                      <img src={currentImage} alt="预览图片" width="100%"  onClick={handleClose}/>
                    </Modal>
          </div>
        ))}
      </div>

      {/* 上传图片按钮 */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '-20px', right: '10px' }}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="uploadImage"
            onChange={handleImageUpload}
          />
          <label htmlFor="uploadImage" className={styles.uploadButton}>
            <PictureOutlined /> 上传图片 
          </label>

          <label className={styles.uploadButton}>
            <UploadOutlined /> 发 送
          </label>
        </div>
      </div>

      <div>
        {errorMsg && <div className={styles.error}>{errorMsg}</div>}
      </div>

      {/* 评论区标题 */}
      <h1>评论区 (10)</h1>
      <div>
        <div className={styles.sendcomment}>
          <Avatar className={styles.commentAvatar} />
          <div className={styles.commentContent}>
            <div className={styles.commentName}>
              <span>匿名用户</span>
            </div>
            <div className={styles.commentText}>
              12121
            </div>
            <div className={styles.commentfooter}>
              <div style={{ display: 'flex' }}>
                <span className={styles.commentTime}>2021-12-12 12:12:12</span>
                <span className={styles.commentReply} onClick={handleReply}>
                  {showReply ? '回复' : (<span style={{ color: '#ff6b6b' }}>取消回复</span>)}
                </span>
                <span className={styles.commentLike} 
                      onClick={onLikeClick}
                      style={{ color: hasLiked ? '#ff6b6b' : '#333' }}
                      ><LikeOutlined /> {commentLike}</span>
              </div>
              <div>
                <MoreEvent />
              </div>
            </div>
            {!showReply && (
                <div className={styles.replycomment}>
                  <textarea
                    ref={commentInputRef}
                    placeholder='回复匿名用户...'
                    className={styles.commentInput}
                    maxLength={1000}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                  />
                  <label className={styles.uploadButton}>
                    <UploadOutlined /> 发 送
                  </label>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;

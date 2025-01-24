import { useSelector } from "react-redux";
import NoLogin from "../../components/nologin/nologin";
import styles from "./index.less";
import { FolderAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Input } from "antd";
import HSdetails from "../../components/HSdetails/hsdetails";

const Star = () => {
  const { isLogin } = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState(false); // 控制是否点击
  const [folderName, setFolderName] = useState(""); // 用户输入的收藏夹名称
  const [folders, setFolders] = useState([]); // 存储创建的收藏夹名称列表

  const [clickedIndex, setClickedIndex] = useState(folders.length-1); 

  // 处理点击某个收藏夹
  const handleFolderClick = (index) => {
    setClickedIndex(index); // 更新点击的索引
  };

  // 确认输入，添加收藏夹
  const handleConfirm = () => {
    if (folderName.trim()) {
      setFolders([...folders, folderName]); // 添加新收藏夹
      setFolderName(""); // 清空输入框
      setIsClicked(false); // 隐藏输入框
      setClickedIndex(folders.length);
    }
  };

  const handleDelete = (index) => {
    const updatedFolders = folders.filter((_, idx) => idx !== index); // 过滤掉被删除的元素
    setFolders(updatedFolders); // 更新状态
    setClickedIndex(index - 1);
  };

  return (
    <div>
      {!isLogin ? (
        <NoLogin />
      ) : (
        <div className={styles.Page}>
          <div className={styles.container}>
            <div className={styles.starTitle}>我的收藏</div>
            <div className={styles.starContent}>
              <div className={styles.starSider}>
                <div
                  className={`${styles.starFolder} ${
                    isClicked ? styles.starFolderClicked : ""
                  }`}
                  onClick={() => setIsClicked(!isClicked)}
                >
                  <FolderAddOutlined />
                  <span style={{ marginLeft: "5px" }}>新建收藏夹</span>
                </div>
                {isClicked && (
                  <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                    <Input
                      type="text"
                      value={folderName}
                      onChange={(e) => setFolderName(e.target.value)}
                      placeholder="输入收藏夹名称"
                      className={styles.inputField}
                      onBlur={handleConfirm}
                    />
                  </div>
                )}

                <div>
                  {folders
                    .slice()
                    .reverse() // 使用 reverse() 方法反转数组
                    .map((folder, index) => (
                      <div
                        key={index}
                        className={`${styles.starFolder} ${
                          clickedIndex === folders.length - 1 - index
                            ? styles.starFolderClicked
                            : ""
                        }`} // 添加点击后的类名
                        onClick={() =>
                          handleFolderClick(folders.length - 1 - index)
                        } // 点击时设置正确的索引
                      >
                        <div
                          style={{
                            width: "90%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {folder}
                        </div>
                        <div
                          style={{ width: "10%" }}
                          onClick={(e) => {
                            e.stopPropagation(); // 阻止事件冒泡，防止触发外层的 onClick
                            handleDelete(folders.length - 1 - index); // 删除对应的收藏夹
                          }}
                        >
                          <DeleteOutlined />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className={styles.starContentRight}>
                <HSdetails />
                <HSdetails />
                <HSdetails />
                <HSdetails />
                <HSdetails />
             </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Star;

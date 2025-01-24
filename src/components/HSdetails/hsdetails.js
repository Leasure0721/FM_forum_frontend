const HSdetails = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "#000",
        borderBottom: "1px solid #ccc",
        paddingBottom: "10px",
        paddingTop: "10px",
      }}
    >
      {/* 图文显示第一张图片，视频显示封面加上一个播放的遮罩，文章显示封面 */}
      <div
        style={{
          width: "176px",
          height: "100px",
          background: "#666",
          marginRight: "40px",
        }}
      >
        预览图片或者视频
      </div>
      <div>
        <div
          style={{ fontSize: "20px", fontWeight: "600px", marginBottom: "1px" }}
        >
          标题
        </div>
        <div
          style={{
            maxWidth: "1000px",
            maxHeight: "50px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2, // 设置最大显示行数为 2 行
            textOverflow: "ellipsis",
            fontSize: "14px",
            color: "#666",
            marginBottom: "10px",
          }}
        >
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容
          容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容
        </div>
        <div>浏览的时间</div>
      </div>
    </div>
  );
};

export default HSdetails;

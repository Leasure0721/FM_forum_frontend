import React, { useState } from "react";
import { Button } from 'antd';

const FollowBtn = () => {
    const [isFollowing, setIsFollowing] = useState(true); // 初始状态为已关注

    const handleToggleFollow = () => {
        setIsFollowing(!isFollowing); // 切换状态
    };

    return (
        <div>
            <Button type={isFollowing ? "primary" : "default"}  onClick={handleToggleFollow}>
                {isFollowing ? "已关注" : "关注"}
            </Button>
        </div>
    );
};

export default FollowBtn;

import styles from './index.less'
import { LikeOutlined, MessageOutlined, StarOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { useLocation } from "react-router-dom";

const ArticalPre = () => {
    const location = useLocation();
    const width = location.pathname === '/home' ? '1172px' : '550px';

    return (
        <div className={styles.followcontainer}>
        <div style={{ width: '178px', height: '100px', background: '#666', marginRight: '50px' }} >
            {/* <img src={Morenpic}/> */}
        </div>
        <div>
            <div style={{ fontSize: '20px', fontWeight: '600px', marginBottom: '1px' }}>
                标题
            </div>
            <div style={{
                maxWidth: width,
                maxHeight: '50px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,  // 设置最大显示行数为 2 行
                textOverflow: 'ellipsis',
                fontSize: '14px',
                color: '#ccc',
                marginBottom: '10px'
            }}>
                容内容内容内容内容内容内容内容内容内容内容
                容内容内容内容内容内容内容内容内容内容内容
                容内容内容内容内容内容内容内容内容内容内容
                容内容内容内容内容内容内容内容内容内容内容
                容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', color: '#999' }}>
                        <div style={{ marginRight: '10px' }}>
                            <LikeOutlined /> 10
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <MessageOutlined /> 7
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <StarOutlined /> 8
                        </div>
                    </div>
                </div>
                <span>
                    <Avatar size={24} icon={<UserOutlined />} style={{ marginRight: '10px', border: '1px solid #FF6B6B' }} />
                    作者名字
                    <span style={{ marginLeft: '10px', color: '#999' }}>
                        2021-08-01
                    </span>
                </span>
            </div>
        </div>
    </div>
    )
}

export default ArticalPre
import React, { useState, startTransition, useEffect } from 'react';
import { Layout, Menu, Input, Dropdown, Avatar, Button } from 'antd';
import styles from './menu.less'
import { useNavigate, useLocation } from 'react-router-dom';
import { FireOutlined, HomeOutlined, HeartFilled, UserOutlined, MailOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Logo from '../../assets/svg/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { setAvatar, setBirthday, setCreatetime, setGender, setUsername,setSignature } from '../../redux/userSlice';


const { Header } = Layout;
const { Search } = Input;


const MenuBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleMenuClick = (path) => {
    // 使用 startTransition 来包裹导航操作
    startTransition(() => {
      navigate(path);
    });
  };

  const items = [
    {
      label: (
        <span>
          <HomeOutlined
            style={{
              marginRight: '5px',
              fontSize: '15px',
              marginLeft: '0',
              transition: 'none'
            }} />
          首 页
        </span>
      ),
      key: 'home',
      onClick: () => handleMenuClick('/home'),
    },
    {
      label: (
        <span>
          <HeartFilled style={{
            marginRight: '5px',
            fontSize: '15px',
            marginLeft: '0',
            transition: 'none'
          }} />
          关 注
        </span>
      ),
      key: 'follow',
      onClick: () => handleMenuClick('/follow'),
    },
    {
      key: 'userinfo',
      label: (
        <span>
          <UserOutlined style={{
            marginRight: '5px',
            fontSize: '15px',
            marginLeft: '0',
            transition: 'none'
          }} />
          我的内容
        </span>
      ),
      onClick: () => handleMenuClick('/userinfo'),
    },
  ];

  const messageItems = [
    {
      key: 'message',
      label: '我的消息',
      onClick: () => handleMenuClick('/message/message')
    },
    {
      label: '回复我的',
      key: 'comment',
      onClick: () => handleMenuClick('/message/comment')
    },
    {
      label: '赞和收藏',
      key: 'like',
      onClick: () => handleMenuClick('/message/like')
    },
    {
      label: '系统消息',
      key: 'system',
      onClick: () => handleMenuClick('/message/system')
    }
  ]

  const tologin = () => {
    navigate('/login');
  }

 const usersetting = [
  {
    key: 'changeuser',
    label: '切换账号',
    onClick: () => {
      navigate('/login');
    }
  }, 
  {
     key: 'logout',
     label: '退出登录',
     onClick: () => {
       dispatch(logout());
       dispatch(setUsername(''));
       dispatch(setSignature(''));
       dispatch(setGender(''));
       dispatch(setAvatar(''));
       dispatch(setBirthday(''));
       dispatch(setCreatetime(''));
       navigate('/login');
     }
   }
 ]

  // 通过当前路径决定选中的菜单项
  const selectedKeys = [location.pathname.split('/')[1] || 'home'];  // 获取 URL 中的路径部分并设置为选中的 key

  const { username, avatar } = useSelector(state => state.user);

  const { isLogin } = useSelector(state => state.auth);
  
  useEffect(() => {
   console.log(isLogin);
 }, [isLogin]);

  return (
    <Layout>
      <Header className={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={styles.logocontainer}>
            <div style={{ marginTop: '25px' }}>
              <img src={Logo} alt="FM" />
            </div>
            <div className={styles.logotext}>
              远山论坛
            </div>
          </div>
          <Menu
            mode='horizontal'
            items={items}
            className={styles.menu}
            selectedKeys={selectedKeys}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginTop: '18px', width: '500px' }}>
            <Search placeholder="点击开始搜索" enterButton />
          </div>

          <div style={{ display: 'flex', marginLeft: '30px', cursor: 'pointer' }}>

            {!isLogin ? (
              <div onClick={tologin}>
                <Avatar style={{
                  backgroundColor: '#FF6B87',
                }}>
                  登录
                </Avatar>
              </div>
            ) : (
              <div>
                <Dropdown menu={{ items: usersetting }} arrow={{ pointAtCenter: true }} placement='bottom'>
                  <Avatar
                    src={avatar || <div>{username.charAt(0)}</div>}
                    style={{ border: '1px solid #ff6b6b' }} />
                </Dropdown>
              </div>
            )}

            <div style={{ marginLeft: '20px' }}>
              <Dropdown menu={{ items: messageItems }} arrow={{ pointAtCenter: true }} placement='bottom'>
                <a onClick={(e) => e.preventDefault()}>
                  <MailOutlined style={{ fontSize: '15px' }} />
                </a>
              </Dropdown>
            </div>

            <div>
              <Button className={styles.buttonStyle} onClick={() => handleMenuClick('/create')}>
                <PlusCircleOutlined /> 发布帖子
              </Button>
            </div>
          </div>
        </div>
      </Header>
    </Layout>

  )
}

export default MenuBar;
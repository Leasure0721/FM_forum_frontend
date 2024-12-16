import React, { useState, useEffect } from "react";
import styles from "../common.less";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input, Button, message } from "antd";
import { isInputEmpty, isEmailValid } from "../../../utils/validation";
import { MailOutlined } from "@ant-design/icons";
import Logo from "../../../assets/svg/logo.svg";

const EmailVer = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/login");
    };

    const [email, setEmail] = React.useState("");
    const [captcha, setCaptcha] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const [captchabtnstyl, setCaptchabtnstyl] = useState(true);
    const [timer, setTimer] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        // 如果 timer > 0，设置每秒更新一次
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1); // 每秒减1
            }, 1000);

            // 清除定时器，防止内存泄漏
            return () => clearInterval(interval);
        } else {
            setDisabled(false); // timer 结束后，启用按钮
        }
    }, [timer]); // 依赖于 timer，timer 每次变化时都会触发 useEffect

    const [messageApi, contextHolder] = message.useMessage();

    const captchasuccess = () => {
        messageApi.open({
            type: 'success',
            content: '验证码发送成功，请注意查收！'
        })
    }

    const handleCaptcha = async () => {
        if (isInputEmpty(email)) {
            setErrorMessage("邮箱不为空");
            return;
        }

        setCaptchabtnstyl(false);
        setDisabled(true);
        setTimer(60);

        try {
            const response = await fetch("http://localhost:8081/users/sendCaptcha", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                }),
            });
            const data = await response.json();
            if (data.code === "200") {
                captchasuccess();
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("验证码发送失败，请稍后再试");
        }
    };

    const success = () => {
        messageApi.open({
            type: 'success',
            content: '登录成功，远山启动!'
        })
    }

    const handleemailver = async () => {
        if (isInputEmpty(email)) {
            setErrorMessage("邮箱不为空！");
            return;
        }
        if (!isEmailValid(email)) {
            setErrorMessage("邮箱格式不正确！");
            return;
        }
        if (isInputEmpty(captcha)) {
            setErrorMessage("验证码不为空！");
            return;
        }

        try {
            const response = await fetch("http://localhost:8081/users/mailverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    verificationCode: captcha,
                }),
            });
            const data = await response.json();
            if (data.code === "200") {
                success();
                setTimeout(() => {
                    navigate('/home');
                }, 800)
            } else {
                setErrorMessage(data.msg);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("网络错误，请稍后再试！");
        }
    };

    return (
        <div className={styles.Page}>
            {contextHolder}
            <div className={styles.Content}>
                <div className={styles.bcklogin} onClick={handleBack}>
                    <ArrowLeftOutlined style={{ marginTop: "4px", marginRight: "4px" }} />{" "}
                    返回登录
                </div>
                <img src={Logo} alt="logo" />
                <div
                    style={{ fontSize: "24px", fontWeight: "800", marginBottom: "20px" }}
                >
                    你也可以用邮箱验证登录！
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <Input
                        placeholder="请输入邮箱"
                        prefix={<MailOutlined />}
                        value={email}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (!value.includes(" ")) {
                                setEmail(value);
                            }
                        }}
                    />
                </div>
                <div style={{ marginBottom: "20px", display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>
                        <Input
                            placeholder="请输入验证码"
                            value={captcha}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (!value.includes(" ")) {
                                    setCaptcha(value);
                                }
                            }}
                        />
                    </div>
                    <div>
                        {captchabtnstyl ? (
                            <Button
                                style={{ fontFamily: "PingFang SC" }}
                                onClick={handleCaptcha}
                            >
                                获取验证码
                            </Button>
                        ) : (
                            <Button
                                style={{ fontFamily: "PingFang SC" }}
                                disabled={disabled}
                                onClick={handleCaptcha}
                            >
                                {timer > 0 ? `已发送(${timer}s)` : "重新发送"}
                            </Button>
                        )}
                        <span
                            style={{ color: "#666", fontSize: "10px", marginLeft: "10px" }}
                        >
                            验证码有效期为五分钟，请及时输入
                        </span>
                    </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <Button
                        type="primary"
                        style={{ width: "80%" }}
                        onClick={handleemailver}
                    >
                        登录
                    </Button>
                </div>
                <div className={styles.errorMessage}>{errorMessage}</div>
            </div>
        </div>
    );
};

export default EmailVer;

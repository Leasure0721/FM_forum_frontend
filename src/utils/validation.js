
/**
 * 判断输入框内容是否为空
 * @param {string} value - 输入框的值
 * @returns {boolean} - 返回 true 表示为空，false 表示不为空
 */
export const isInputEmpty = (value) => {
    return !value || value.trim() === '';
  };

export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
// 判断密码强度的函数
export const checkPasswordStrength = (password) => {
  // 密码长度小于8，强度为弱
  if (password.length < 6) {
      return 0;  // 非常弱
  }

  let score = 0;

  // 检查是否包含大写字母
  if (/[A-Z]/.test(password)) {
      score++;
  }

  // 检查是否包含小写字母
  if (/[a-z]/.test(password)) {
      score++;
  }

  // 检查是否包含数字
  if (/\d/.test(password)) {
      score++;
  }

  // 检查是否包含特殊字符
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score++;
  }

  // 密码的强度评估
  if (score === 1) {
      return 1;  // 弱密码
  } else if (score === 2) {
      return 2;  // 中等密码
  } else if (score === 3) {
      return 3;  // 强密码
  } else if (score === 4) {
      return 4;  // 非常强密码
  }
  return 0;  // 如果没有满足任何条件，返回非常弱密码
};


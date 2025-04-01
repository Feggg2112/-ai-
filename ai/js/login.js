  // 随机生成验证码
  function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('captcha').textContent = captcha;
}

// 页面加载时生成验证码
window.onload = generateCaptcha;

// 显示弹窗
function showModal() {
    document.getElementById('errorModal').style.display = 'block';
}

// 关闭弹窗
function closeModal() {
    document.getElementById('errorModal').style.display = 'none';
}

// 登录按钮点击事件
document.getElementById('loginButton').addEventListener('click', function () {
    const userInput = document.getElementById('captchaInput').value; // 用户输入的验证码
    const captcha = document.getElementById('captcha').textContent; // 生成的验证码

    if (userInput === captcha) {
        // 验证码正确，跳转到指定页面
        window.location.href = 'index.html';
    } else {
        // 验证码错误，显示弹窗
        showModal();
    }
});
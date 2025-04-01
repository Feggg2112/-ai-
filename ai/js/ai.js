// 获取 DOM 元素
const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// 发送消息
sendButton.addEventListener('click', function () {
    const message = userInput.value.trim();
    if (message) {
        // 添加用户消息
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = message;
        chatArea.appendChild(userMessage);

        // 清空输入框
        userInput.value = '';

        // 模拟 AI 回复
        setTimeout(() => {
            const aiMessage = document.createElement('div');
            aiMessage.className = 'message ai-message';
            aiMessage.textContent = '收到您的消息：“' + message + '”。我正在处理...';
            chatArea.appendChild(aiMessage);

            // 滚动到底部
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 500);
    }
});

// 按回车键发送消息
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
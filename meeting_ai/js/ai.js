// 获取 DOM 元素
const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');
const chatContainer = document.querySelector('.chat-container'); // 获取最外层容器

// 发送消息
sendButton.addEventListener('click', async function () {
    // 隐藏错误提示
    errorMessage.style.display = 'none';

    const message = userInput.value.trim();
    if (message) {
        // 添加用户消息
        const userMessage = document.createElement('div');
        userMessage.className ='message user-message';
        userMessage.textContent = message;
        chatArea.appendChild(userMessage);

        // 清空输入框
        userInput.value = '';

        // 显示加载提示
        loadingIndicator.style.display = 'block';

        // 移除变暗动画类，添加变亮动画类
        chatContainer.classList.remove('dimming');
        chatContainer.classList.add('brightening');

        // 变亮动画结束后开始闪烁动画
        setTimeout(() => {
            chatContainer.classList.remove('brightening');
            chatContainer.classList.add('blinking');
        }, 1000);

        try {
            // 发送请求到后端
            const response = await fetch(`http://localhost:8080/api/get?input=${encodeURIComponent(message)}`);
            const data = await response.json();

            // 检查响应状态
            if (data.code === 0) {
                // 提取 AI 回复
                const messages = data.data.session.messages;
                const aiResponse = messages.find(msg => msg.role === 'assistant');

                if (aiResponse) {
                    // 添加 AI 消息
                    const aiMessage = document.createElement('div');
                    aiMessage.className ='message ai-message';
                    aiMessage.textContent = aiResponse.content;
                    chatArea.appendChild(aiMessage);
                }
            }
        } catch (error) {
            console.error('请求出错:', error);
            // 显示错误提示信息
            errorMessage.style.display = 'block';
        } finally {
            // 隐藏加载提示
            loadingIndicator.style.display = 'none';

            // 移除闪烁动画类，添加变暗动画类
            chatContainer.classList.remove('blinking');
            chatContainer.classList.add('dimming');
        }

        // 滚动到底部
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});

// 按回车键发送消息
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
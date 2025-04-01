// 获取 URL 中的会议 ID
const urlParams = new URLSearchParams(window.location.search);
const meetingId = urlParams.get('id');

// 模拟会议纪要数据
const meetingSummaries = {
    1: {
        title: '项目启动会议',
        date: '2023-10-01 10:00 - 12:00',
        content: `
            <h2>项目启动会议</h2>
            <p><strong>时间：</strong>2023-10-01 10:00 - 12:00</p>
            <p><strong>地点：</strong>会议室 A</p>
            <p><strong>参会人员：</strong>张三、李四、王五</p>
            <p><strong>会议内容：</strong></p>
            <ul>
                <li>项目背景介绍</li>
                <li>项目目标讨论</li>
                <li>任务分配</li>
            </ul>
        `
    },
    2: {
        title: '需求评审会议',
        date: '2023-10-05 14:00 - 16:00',
        content: `
            <h2>需求评审会议</h2>
            <p><strong>时间：</strong>2023-10-05 14:00 - 16:00</p>
            <p><strong>地点：</strong>会议室 B</p>
            <p><strong>参会人员：</strong>张三、李四、王五</p>
            <p><strong>会议内容：</strong></p>
            <ul>
                <li>需求文档评审</li>
                <li>需求优先级讨论</li>
                <li>下一步计划</li>
            </ul>
        `
    },
    3: {
        title: '技术方案讨论会议',
        date: '2023-10-10 09:00 - 11:00',
        content: `
            <h2>技术方案讨论会议</h2>
            <p><strong>时间：</strong>2023-10-10 09:00 - 11:00</p>
            <p><strong>地点：</strong>会议室 C</p>
            <p><strong>参会人员：</strong>张三、李四、王五</p>
            <p><strong>会议内容：</strong></p>
            <ul>
                <li>技术方案介绍</li>
                <li>方案优缺点讨论</li>
                <li>最终方案确定</li>
            </ul>
        `
    }
};

// 动态生成会议纪要内容
const summaryContainer = document.getElementById('summaryContainer');
if (meetingId && meetingSummaries[meetingId]) {
    summaryContainer.innerHTML = meetingSummaries[meetingId].content;
} else {
    summaryContainer.innerHTML = '<h2>会议纪要未找到</h2>';
}
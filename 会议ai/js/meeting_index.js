// 获取会议记录列表
const meetingList = document.getElementById('meetingList');

// 监听会议记录点击事件
meetingList.addEventListener('click', function (e) {
    const meetingItem = e.target.closest('.meeting-item');
    if (meetingItem) {
        const meetingId = meetingItem.getAttribute('data-id');
        // 跳转到会议纪要页面，并传递会议 ID
        window.location.href = `meeting-summary.html?id=${meetingId}`;
    }
});
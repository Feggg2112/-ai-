// 获取 DOM 元素
const uploadArea = document.getElementById('uploadArea');
const fileInfo = document.getElementById('fileInfo');
const uploadButton = document.getElementById('uploadButton');
let selectedFile = null;

// 拖拽文件到上传区域
uploadArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', function () {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', function (e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    handleFile(e.dataTransfer.files[0]);
});

// 点击上传区域选择文件
uploadArea.addEventListener('click', function () {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*, video/*'; // 限制文件类型为音频或视频
    fileInput.onchange = function (e) {
        handleFile(e.target.files[0]);
    };
    fileInput.click();
});

// 处理文件
function handleFile(file) {
    if (file && (file.type.startsWith('audio/') || file.type.startsWith('video/'))) {
        selectedFile = file;
        fileInfo.textContent = `已选择文件：${file.name}`;
    } else {
        alert('请选择有效的音频或视频文件');
    }
}

// 上传按钮点击事件
uploadButton.addEventListener('click', function () {
    if (selectedFile) {
        if (selectedFile.type.startsWith('audio/')) {
            // 直接上传音频文件
            alert(`音频文件 "${selectedFile.name}" 上传成功！`);
        } else if (selectedFile.type.startsWith('video/')) {
            // 模拟视频转音频
            alert(`视频文件 "${selectedFile.name}" 已转换为音频并上传成功！`);
        }
        fileInfo.textContent = '未选择文件';
        selectedFile = null;
    } else {
        alert('请先选择文件');
    }
});
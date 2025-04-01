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
    fileInput.accept = '.xlsx, .xls'; // 限制文件类型为 Excel
    fileInput.onchange = function (e) {
        handleFile(e.target.files[0]);
    };
    fileInput.click();
});

// 处理文件
function handleFile(file) {
    if (file && (file.name.endsWith('.xlsx') || file.name.endsWith('.xls'))) {
        selectedFile = file;
        fileInfo.textContent = `已选择文件：${file.name}`;
    } else {
        alert('请选择有效的 Excel 文件（.xlsx 或 .xls）');
    }
}

// 上传按钮点击事件
uploadButton.addEventListener('click', function () {
    if (selectedFile) {
        // 模拟上传逻辑
        alert(`文件 "${selectedFile.name}" 上传成功！`);
        fileInfo.textContent = '未选择文件';
        selectedFile = null;
    } else {
        alert('请先选择文件');
    }
});
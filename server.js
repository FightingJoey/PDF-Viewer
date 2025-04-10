const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 静态文件服务
app.use(express.static(__dirname));

// 主页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'viewer.html'));
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
    console.log(`PDF查看器地址: http://localhost:${port}/viewer.html?file=1.pdf`);
}); 
# 西湖论剑大会 AI+ 会议助手智能体应用开发项目

## 项目概述
本项目是为西湖论剑大会开发的 AI+ 会议助手智能体应用，包含用户登录、个人信息上传、会议纪要生成等功能，同时采用 Spring Boot 和 JWT 实现了安全的用户认证和授权机制。

## 项目结构- ai/
  - css/
  - images/
  - js/
  - index.html
  - login.html
  - message_import.html
  - meeting_summary.html
  - meeting_index.html
- meeting_ai/
  - css/
  - images/
  - js/
  - index.html
  - login.html
  - message_import.html
  - meeting_summary.html
  - meeting_index.html
- springboot-jwt-demo/
  - src/
    - main/
      - java/
        - cn/
          - echisan/
            - springbootjwtdemo/
              - controller/
              - repository/
              - service/
              - utils/
              - filter/
              - model/
      - resources/
  - pom.xml
- demo/
  - src/
    - main/
      - java/
        - com/
          - example/
            - demo/
              - controller/
      - resources/
  - pom.xml
## 功能模块

### 1. 用户登录
- 提供账号、密码和验证码输入框。
- 随机生成验证码，用户输入验证码进行验证。
- 验证失败弹出错误提示框。

### 2. 个人信息上传
- 支持拖放或选择 Excel 文件进行上传。
- 限制文件类型为 `.xlsx` 或 `.xls`。

### 3. 会议纪要生成
- 展示会议记录列表。
- 会议纪要内容通过 JavaScript 动态生成。

### 4. 会议上传
- 支持拖放或选择音频或视频文件进行上传。
- 限制文件类型为音频或视频格式。

### 5. 安全认证与授权
- 使用 Spring Boot 和 JWT 实现用户认证和授权。
- 只有认证通过的用户才能访问受保护的资源。
- 管理员角色可以执行特定操作，如创建新任务。

## 技术栈
- **前端**：HTML、CSS、JavaScript
- **后端**：Spring Boot
- **数据库**：MySQL
- **安全**：JWT（JSON Web Token）

## 环境要求
- Java 1.8 及以上
- Maven
- MySQL

## 部署步骤

### 1. 克隆项目git clone <项目仓库地址>
cd <项目目录>
### 2. 配置数据库
- 创建 MySQL 数据库。
- 修改 `springboot-jwt-demo` 项目中的数据库连接配置。

### 3. 构建项目mvn clean install
### 4. 启动后端服务cd springboot-jwt-demo
mvn spring-boot:run
### 5. 启动前端服务
- 可以使用静态服务器（如 `http-server`）启动前端页面。npm install -g http-server
cd ai
http-server
## 团队信息
- **队伍名称**：发际线安保队
- **队长**：王泽宇
- **队员**：张奕凡、王明聪
- **吉祥物画师**：江雪长情

## 注意事项
- 请确保数据库服务正常运行。
- 前端页面的样式和交互可能需要根据实际需求进行调整。
    

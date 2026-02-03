# 海南家庭旅游计划网页

这是一个展示海南7天6晚家庭旅游详细行程计划的交互式网页，包含时间轴展示、高德地图路线可视化等功能。

## 项目结构

```
deploy/
├── api/                    # Vercel Serverless Functions
│   └── map-config.js       # 提供高德地图 API 密钥的接口
├── public/                 # 静态资源文件
│   └── index.html          # 主页面
├── vercel.json             # Vercel 部署配置
├── package.json            # 项目配置文件
├── .env.example            # 环境变量示例
├── .gitignore              # Git 忽略文件配置
└── README.md               # 项目说明文档（本文件）
```

## 功能特性

- **交互式时间轴**：详细展示7天行程，每个活动包含时间、类型、描述、导航信息等
- **地图路线可视化**：使用高德地图展示整个旅游路线，包含所有关键地点标记
- **响应式设计**：适配手机、平板、电脑等各种设备
- **API 密钥安全管理**：使用 Serverless Function 安全地管理高德地图 API 密钥
- **优雅的动画效果**：滚动动画、卡片悬停效果等

## 技术栈

- **前端**: HTML5, Tailwind CSS, JavaScript (ES6+)
- **地图**: 高德地图 API 2.0
- **部署**: Vercel (静态托管 + Serverless Functions)

## 部署指南

### 前置准备

1. **注册 Vercel 账号**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **获取高德地图 API 密钥**
   - 访问 [高德开放平台](https://lbs.amap.com/)
   - 注册并登录账号
   - 进入"控制台" → "应用管理" → "我的应用"
   - 创建新应用，添加 Key，选择"Web端（JS API）"
   - 复制生成的 API Key

### 方法一：通过 Vercel 网页部署（推荐）

1. **上传代码到 Git 仓库**
   ```bash
   # 进入 deploy 目录
   cd deploy
   
   # 初始化 git（如果还没有）
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit"
   
   # 推送到 GitHub/GitLab/Bitbucket
   git remote add origin <你的仓库地址>
   git push -u origin main
   ```

2. **在 Vercel 导入项目**
   - 登录 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "Add New" → "Project"
   - 选择你的 Git 仓库
   - 点击 "Import"

3. **配置项目**
   - **Root Directory**: 选择 `deploy` 目录（如果项目根目录就是 deploy，则留空）
   - **Framework Preset**: 选择 "Other"
   - **Build Settings**: 保持默认即可

4. **配置环境变量**
   - 在项目设置页面，找到 "Environment Variables"
   - 添加环境变量：
     - **Name**: `AMAP_API_KEY`
     - **Value**: 粘贴你的高德地图 API 密钥
   - 选择应用到所有环境（Production, Preview, Development）
   - 点击 "Save"

5. **部署**
   - 点击 "Deploy" 按钮
   - 等待部署完成（通常需要 1-2 分钟）
   - 部署成功后，会显示项目的访问链接

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **进入项目目录**
   ```bash
   cd deploy
   ```

4. **首次部署**
   ```bash
   vercel
   ```
   
   按照提示：
   - 选择 scope（个人账号或团队）
   - 确认项目名称
   - 确认项目路径
   - 选择不覆盖任何设置

5. **配置环境变量**
   ```bash
   vercel env add AMAP_API_KEY
   ```
   
   按提示输入：
   - 粘贴你的高德地图 API Key
   - 选择应用到哪些环境（建议全选：Production, Preview, Development）

6. **重新部署生产环境**
   ```bash
   vercel --prod
   ```

7. **获取部署链接**
   部署成功后，命令行会显示项目的访问链接，例如：
   ```
   https://your-project-name.vercel.app
   ```

### 本地开发

1. **安装依赖**（可选，本项目无外部依赖）
   ```bash
   npm install
   ```

2. **创建本地环境变量文件**
   ```bash
   cp .env.example .env
   ```
   
   编辑 `.env` 文件，填入你的高德地图 API Key：
   ```
   AMAP_API_KEY=你的真实API密钥
   ```

3. **启动本地开发服务器**
   ```bash
   vercel dev
   ```
   
   或使用 npm script：
   ```bash
   npm run dev
   ```

4. **访问本地服务**
   打开浏览器访问：`http://localhost:3000`

## 环境变量说明

| 变量名 | 说明 | 必填 | 示例 |
|--------|------|------|------|
| `AMAP_API_KEY` | 高德地图 Web 服务 API 密钥 | 是 | `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6` |

## 故障排除

### 地图无法显示

**原因及解决方案：**

1. **API Key 未配置或配置错误**
   - 检查 Vercel 项目设置中的环境变量是否正确配置
   - 确认 API Key 没有多余的空格
   - 在高德开放平台检查 Key 的状态是否正常

2. **API Key 权限不足**
   - 在高德开放平台确认该 Key 已开通 "Web端（JS API）" 权限
   - 检查 Key 的调用量是否超限

3. **跨域问题**
   - 在高德开放平台的 Key 设置中，将你的域名添加到白名单
   - 本地开发时，将 `localhost` 和 `127.0.0.1` 添加到白名单

4. **网络问题**
   - 确认浏览器能正常访问 `webapi.amap.com`
   - 检查浏览器控制台是否有网络错误

### Serverless Function 报错

**检查步骤：**

1. 访问 `https://你的域名/api/map-config`
2. 应该看到类似以下的 JSON 响应：
   ```json
   {
     "amapKey": "你的API密钥",
     "amapVersion": "2.0",
     "amapPlugins": "AMap.Scale,AMap.ToolBar"
   }
   ```
3. 如果返回错误，检查：
   - Vercel 项目的环境变量是否正确配置
   - Function 是否正确部署（查看 Vercel Dashboard → Functions）

### 部署失败

**常见原因：**

1. **文件路径问题**
   - 确保 `vercel.json` 中的路径配置正确
   - 检查 `api/` 和 `public/` 目录是否存在

2. **构建配置问题**
   - 确认 `vercel.json` 格式正确（JSON 语法）
   - 查看 Vercel 部署日志获取详细错误信息

3. **环境变量未生效**
   - 配置环境变量后需要重新部署
   - 确认环境变量应用到了正确的环境（Production/Preview/Development）

## 自定义开发

### 修改地图样式

在 `public/index.html` 的 `initMap()` 函数中修改：

```javascript
map = new AMap.Map('map-container', {
    zoom: 8,
    center: [109.8, 18.8],
    mapStyle: 'amap://styles/whitesmoke',  // 修改这里
    viewMode: '2D'
});
```

可用样式：
- `amap://styles/normal` - 标准
- `amap://styles/whitesmoke` - 月光银（当前使用）
- `amap://styles/grey` - 雅士灰
- `amap://styles/macaron` - 马卡龙
- `amap://styles/darkblue` - 极夜蓝
- 更多样式请参考[高德地图自定义地图](https://lbs.amap.com/api/javascript-api/guide/map/map-style)

### 修改行程数据

在 `public/index.html` 中找到 `travelData` 对象，直接修改相应的数据即可。

### 添加新的地图点

在 `mapPoints` 数组中添加新的坐标点：

```javascript
const mapPoints = [
    // ... 现有的点
    { 
        name: "新景点名称", 
        coords: [经度, 纬度], 
        type: "attraction"  // start, hotel, attraction, waypoint, transport, shopping
    }
];
```

## 项目维护

### 更新部署

**通过 Git：**
```bash
git add .
git commit -m "更新说明"
git push
```
Vercel 会自动检测到更新并重新部署。

**通过 CLI：**
```bash
vercel --prod
```

### 查看部署日志

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 点击 "Deployments" 查看所有部署记录
4. 点击具体的部署查看详细日志

### 自定义域名

1. 在 Vercel Dashboard 的项目设置中
2. 找到 "Domains" 选项
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

## 性能优化建议

1. **图片优化**
   - 当前使用 Picsum 占位图，建议替换为实际景点图片
   - 使用 WebP 格式图片，提供更好的压缩比
   - 为图片添加懒加载（已实现 `loading="lazy"`）

2. **缓存策略**
   - Vercel 自动处理静态资源缓存
   - 可在 `vercel.json` 中自定义缓存头

3. **CDN 加速**
   - Vercel 自带全球 CDN
   - 对于中国用户，考虑使用国内 CDN

## 安全性说明

- API 密钥通过 Serverless Function 管理，不会暴露在前端代码中
- 建议在高德开放平台设置 IP 白名单或域名白名单
- 定期检查 API 调用量，防止被恶意调用

## 许可证

MIT License

## 技术支持

如有问题，请通过以下方式获取帮助：

1. 查看本文档的"故障排除"部分
2. 查看 [Vercel 官方文档](https://vercel.com/docs)
3. 查看 [高德地图 JS API 文档](https://lbs.amap.com/api/javascript-api/summary)
4. 提交 Issue 到项目仓库

## 更新日志

### v1.0.0 (2026-02-03)

- 初始版本发布
- 支持 7 天详细行程展示
- 集成高德地图路线可视化
- 通过 Serverless Function 管理 API 密钥
- 响应式设计，支持移动端访问

---

**祝您和家人旅途愉快！** 🏝️

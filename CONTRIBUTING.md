# 参与贡献

首先，感谢你有兴趣为本项目做出贡献！🎉

FDUGuideBook 是复旦相关资源信息的导航站。任何形式的贡献都受欢迎——无论是修正一个错别字、补充一条链接，还是新增一个完整的板块。

## 目录

- [我能贡献什么](#我能贡献什么)
- [快速开始](#快速开始)
- [开发流程](#开发流程)
- [内容规范](#内容规范)
- [提交信息规范](#提交信息规范)
- [行为准则](#行为准则)
- [联系](#联系)

---

## 我能贡献什么

- **内容补充**：新增学习资料、校内服务、社团组织、科研资源等条目
- **内容修正**：修改失效链接、错别字、过时信息
- **问题反馈**：提交 Issue 报告问题或提出建议
- **功能/样式改进**：优化网站界面与交互体验

不熟悉 Git / GitHub 也没关系，欢迎添加微信（alumls）直接投稿或提出建议。

## 快速开始

本项目基于 [VitePress](https://vitepress.dev/) 构建，需要 Node.js 18+。

```bash
# 1. Fork 本仓库，然后克隆到本地
git clone https://github.com/<你的用户名>/nav-site.git
cd nav-site

# 2. 安装依赖
npm install

# 3. 启动本地开发服务器
npm run docs:dev

# 4. 在浏览器打开终端提示的地址（默认 http://localhost:5173）
```

修改文件后，开发服务器会自动热更新。

## 开发流程

### 1. 创建分支

不要直接在 `main` 上开发。为你的改动新建一个分支，命名建议能描述改动内容：

```bash
git checkout -b add-xxx        # 新增内容
git checkout -b fix-xxx        # 修复问题
git checkout -b update-xxx     # 更新信息
```

### 2. 做出改动

内容以 Markdown 编写，位于 `docs/` 目录下。主要板块：

- `docs/campus/` — 校园相关（校内服务、新生入门、社团组织）
- `docs/study/` — 学习相关（学习资料、科研资源、飞跃手册）
- `docs/about/` — 关于本项目

图标等静态资源放在 `docs/public/`（其中 `docs/public/icons/` 存放站点图标）。

新增链接条目时，请参考所在页面 frontmatter 中已有条目的字段格式（`text` / `link` / `icon` / `desc`）。注意：`icon` 字段若填本地图片路径，需使用部署后的绝对 URL（如 `https://fduguidebook.com/icons/xxx.png`）才能正确渲染，具体见现有条目的写法。

### 3. 本地验证

提交前务必确认构建通过：

```bash
npm run docs:build
```

同时在本地预览检查改动效果：

```bash
npm run docs:preview
```

### 4. 提交并推送

```bash
git add .
git commit -m "feat: 新增 xxx 条目"
git push origin add-xxx
```

### 5. 发起 Pull Request

前往 GitHub 页面，从你的分支向 `main` 发起 Pull Request，并在 PR 描述中简要说明改动内容。

## 内容规范

- **准确性**：确保链接有效、信息正确。过时内容请及时更新或删除。
- **简洁性**：描述简明扼要，与同页面其他条目风格保持一致。
- **合规性**：仅收录互联网公开渠道的资源，尊重原作者权益。如涉及侵权或原作者不希望被收录，请联系删除。
- **非商用**：本项目采用 [CC BY-NC 4.0](./LICENSE) 协议，所有贡献内容须为非商业用途。

## 提交信息规范

提交信息（commit message）建议使用前缀，便于追踪：

| 前缀    | 用途                 | 示例                        |
| ------- | -------------------- | --------------------------- |
| `feat`  | 新增功能/内容        | `feat: 新增 ic-guide 条目`  |
| `fix`   | 修复问题/失效链接    | `fix: 修正 XX 链接`         |
| `update`| 更新已有内容         | `update: 更新社团信息`      |
| `docs`  | 文档修改             | `docs: 补充 CONTRIBUTING`   |
| `style` | 样式调整（不改内容） | `style: 调整卡片间距`       |

## 行为准则

请对所有贡献者保持友善和尊重。我们欢迎不同背景、不同水平的同学参与，共同努力让这个项目变得更好。

## 联系

- 微信：alumls
- Issue：[提交 Issue](https://github.com/FDUGuideBook/nav-site/issues)
- Discussion：[发起讨论](https://github.com/FDUGuideBook/nav-site/discussions)

再次感谢你的贡献！🌟

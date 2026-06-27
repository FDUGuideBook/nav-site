---
prev:
  text: 关于我们
  link: /about
next: false
links:
  - text: 复旦开源倡议
    link: https://github.com/Chi-Shan0707/fdu-opensource-initiative
    icon: https://fduguidebook.com/icons/Github-Dark.svg
    desc: 倡议发起仓库，含完整规范
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 复旦开源倡议

::: tip 倡议目标
鼓励复旦学子将课程项目与文档开源，形成可搜索、可复用的学术资源生态。
:::

<LinkList :links="$frontmatter.links" />

## 仓库命名规范

### 课程类（topic：`fdu-courses`）

格式：`fdu-course-<课程英文名>-<学期>`

- 课程英文名：使用教务系统官方英文名称，空格替换为 `-`，统一小写
- 学期：`xxspring` / `xxfall`（如 `25fall`、`26spring`）

示例：

- `fdu-course-algorithms-25fall`
- `fdu-course-machine-learning-26spring`

### 项目类（topic：`fdu-projects`）

格式：`fdu-project-<项目名>`

示例：

- `fdu-project-robot-manipulation`
- `fdu-project-llm-wiki`

## 如何参与

1. 按规范命名仓库
2. 添加对应 topic：课程类加 `fdu-courses`，项目类加 `fdu-projects`

## 搜索索引

- 复旦开源倡议：鼓励复旦学子将课程项目与文档开源，形成可搜索、可复用的学术资源生态
- 仓库命名规范：课程类 fdu-course-<课程英文名>-<学期>，项目类 fdu-project-<项目名>
- 如何参与：按规范命名仓库，添加对应 topic（fdu-courses / fdu-projects）

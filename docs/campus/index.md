---
# 工具页 frontmatter

# 这里先定义一个简单的链接列表，后续可按需扩展为多组
prev: false
next:
  text: 社团组织
  link: /campus/clubs

links:
  - text: eHall
    link: https://ehall.fudan.edu.cn/
    icon: https://fduguidebook.com/icons/fudan-blue.png
    desc: 复旦大学网上办事大厅
  - text: eLearning
    link: https://elearning.fudan.edu.cn/
    icon: https://fduguidebook.com/icons/canvas.ico
    desc: 复旦大学学习管理系统
  - text: 教务服务管理
    link: https://fdjwgl.fudan.edu.cn/student/home
    icon: https://fdjwgl.fudan.edu.cn/student/static/favicon.png
    desc: 教务教学相关服务入口
  - text: webVPN
    link: https://webvpn.fudan.edu.cn/login
    icon: https://fduguidebook.com/icons/webvpn.png
    desc: 校外访问校内资源入口
innerLinks: 
  - text: 课表查询
    link: http://10.64.130.6/
    desc: 查询全校日期-教室-课程对应情况
  - text: 正版软件
    link: https://zb.fudan.edu.cn/index.html
    icon: https://fduguidebook.com/icons/fudan-blue.png
    desc: 学校提供的正版软件获取与使用说明
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 校内服务

---

<LinkList :links="$frontmatter.links" />

> 以下站点需在校园网环境下访问

<LinkList :links="$frontmatter.innerLinks" />

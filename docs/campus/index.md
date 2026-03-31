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
  - text: 教务服务管理（新版）
    link: https://fdjwgl.fudan.edu.cn/student/home
    icon: https://fduguidebook.com/icons/fudan-jwfw.png
    desc: 教务教学相关服务入口
  - text: webVPN
    link: https://webvpn.fudan.edu.cn/login
    icon: https://fduguidebook.com/icons/webvpn.png
    desc: 校外访问校内资源入口
  - text: 复旦云邮箱
    link: https://mail.m.fudan.edu.cn/
    icon: https://fduguidebook.com/icons/fudan-mail.ico
    desc: 复旦云邮箱
  - text: 选课系统（本科）
    link: https://xk.fudan.edu.cn/course-selection/#/
    icon: https://fduguidebook.com/icons/fudan-jwfw.png
    desc: 选课事务
  - text: 体育管理综合查询系统
    link: https://fdtyjw.fudan.edu.cn/sportScore/
    icon: https://fduguidebook.com/icons/fudan-blue.png
    desc: 成绩、刷段情况查询，理论考试
  - text: 缴费平台
    link: https://cwgl.fudan.edu.cn/payment/
    icon: https://fduguidebook.com/icons/fudan-blue.png
    desc: 缴纳学费、住宿费、医保等
  - text: 2025复旦大学新生攻略手册
    link: https://docs.qq.com/sheet/DR0RSUWxTd0tGTE1q?tab=22tuz7
    icon: https://fduguidebook.com/icons/qqdoc.jpg
    desc: 复旦新生，请查收这份最全新生攻略！
  - text: 复旦大学请假条，ppt模板
    link: https://github.com/FDUGuideBook/nav-site/tree/main/docs/public/files/templates
    icon: https://fduguidebook.com/icons/Github-Dark.svg
    desc: 一些你或许没有的模板
innerLinks: 
  - text: 课表查询
    link: http://10.64.130.6/
    desc: 查询全校日期-教室-课程对应情况
  - text: 考试座位表查询
    link: http://10.64.130.6/exam.asp
    desc: 暗中观察所有同学的考试
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

## 搜索索引

- eHall：复旦大学网上办事大厅
- eLearning：复旦大学学习管理系统
- 教务服务管理（新版）：教务教学相关服务入口
- webVPN：校外访问校内资源入口
- 复旦云邮箱：复旦云邮箱
- 选课系统（本科）：选课事务
- 体育管理综合查询系统：成绩、刷段情况查询，理论考试
- 缴费平台：缴纳学费、住宿费、医保等
- 2025复旦大学新生攻略手册：复旦新生，请查收这份最全新生攻略！
- 复旦大学请假条，ppt模板：一些你或许没有的模板
- 课表查询：查询全校日期-教室-课程对应情况
- 考试座位表查询：暗中观察所有同学的考试
- 正版软件：学校提供的正版软件获取与使用说明

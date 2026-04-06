---
prev: 
  text: 社团组织
  link: /campus/clubs
next:
  text: 科研资源
  link: /study/research
courseLinks:
  - text: FDU Sharing
    link: https://fdu-sharing.vercel.app/
    icon: https://fduguidebook.com/icons/books_color.svg
    desc: 复旦课程资料开放平台
  - text: fudan 开放题库
    link: https://same-smile-119.notion.site/FDU-82b7f0265fc743f7a9bbf32293495b52
    icon: https://fduguidebook.com/icons/memo_color.svg
    desc: 复旦课程资料开放平台
  - text: Awesome-Fudan
    link: https://github.com/jeekzhang/Awesome-Fudan
    icon: https://fduguidebook.com/icons/Github-Dark.svg
    desc: 复旦课程相关代码仓库
  - text: 大数据笔记分享
    link: https://github.com/Snivallus/FDU-Course-Notes-2024-2025
    icon: https://fduguidebook.com/icons/Github-Dark.svg
    desc: from Snivallus
  - text: 大数据笔记分享
    link: https://github.com/ForeverHaibara/Fudan-Courses
    icon: https://fduguidebook.com/icons/Github-Dark.svg
    desc: from ForeverHaibara
  - text: 香蕉空间
    link: https://www.bananaspace.org/wiki/%E7%94%A8%E6%88%B7:Solution
    icon: https://images.weserv.nl/?url=www.bananaspace.org/favicon.ico
    desc: 中文数学社区
guideLinks:
  - text: FDU CS自学指南
    link: https://fdu-open-exam.gitbook.io/csdiy
    icon: https://fduguidebook.com/icons/gitbook.svg
    desc: 复旦计算机类课程自学指南
  - text: CS101
    link: https://cs101.fducslg.com/
    icon: https://cs101.fducslg.com/assets/fducslg.png
    desc: 复旦大学计算机入门指南
  - text: PCS服务队
    link: https://fdupcs.top/guides/
    icon: https://fdupcs.top/assets/logo.png
    desc: 计算机相关问题解决指南
webLinks:
  - text: Z-library
    link: https://z-library.sk/
    icon: https://fduguidebook.com/icons/zlibrary.svg
    desc: 世界上最大的电子图书馆
  - text: Anna's Archive
    link: https://annas-archive.org/
    icon: https://fduguidebook.com/icons/annas-archive.ico
    desc: 人类历史上最大的开源图书馆
  - text: 中国大学 MOOC
    link: https://www.icourse163.org/
    icon: https://fduguidebook.com/icons/icourse.png
    desc: 在线课程学习平台
---

<script setup lang="ts">
import LinkList from "/.vitepress/components/unique/LinkList.vue";
</script>

# 学习资料

## 课程资料

<LinkList :links="$frontmatter.courseLinks" />

## 学习指南

<LinkList :links="$frontmatter.guideLinks" />

## 网络资源

<LinkList :links="$frontmatter.webLinks" />


## 搜索索引

- FDU Sharing：复旦课程资料开放平台
- fudan 开放题库：复旦课程资料开放平台
- Awesome-Fudan：复旦课程相关代码仓库
- 大数据笔记分享：from Snivallus
- 大数据笔记分享：from ForeverHaibara
- 香蕉空间：中文数学社区
- FDU CS自学指南：复旦计算机类课程自学指南
- CS101：复旦大学计算机入门指南
- PCS服务队：计算机相关问题解决指南
- Z-library：世界上最大的电子图书馆
- Anna's Archive：人类历史上最大的开源图书馆
- 中国大学 MOOC：在线课程学习平台
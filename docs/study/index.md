---
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
    link: https://fdupcs.top/
    icon: https://fdupcs.top/assets/logo.png
    desc: 拯救全校师生的生产力危机
webLinks:
  - text: Z-library
    link: https://z-library.sk/
    icon: https://fduguidebook.com/icons/zlibrary.svg
    desc: 世界上最大的电子图书馆
  - text: Anna's Archive
    link: https://annas-archive.org/
    icon: https://fduguidebook.com/icons/annas-archive.ico
    desc: 人类历史上最大的开源图书馆
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
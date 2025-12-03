---
courseLinks:
  - text: FDU Sharing
    link: https://fdu-sharing.vercel.app/
    icon: https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f4da.png
    desc: 复旦课程资料开放平台
  - text: fudan 开放题库
    link: https://same-smile-119.notion.site/FDU-82b7f0265fc743f7a9bbf32293495b52
    icon: https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f4dd.png
    desc: 复旦课程资料开放平台
guideLinks:
  - text: FDU CS自学指南
    link: https://fdu-open-exam.gitbook.io/csdiy
    icon: https://icons.duckduckgo.com/ip3/fdu-open-exam.gitbook.io.ico
    desc: 复旦计算机类课程自学指南
  - text: CS101
    link: https://cs101.fducslg.com/
    icon: https://cs101.fducslg.com/assets/fducslg.png
    desc: 复旦大学计算机入门指南
  - text: 香蕉空间
    link: https://www.bananaspace.org/wiki/
    icon: https://images.weserv.nl/?url=www.bananaspace.org/favicon.ico
    desc: 中文数学社区
---

<script setup lang="ts">
import LinkList from "@/components/unique/LinkList.vue";
</script>

# 学习资料

## 课程资料

<LinkList :links="$frontmatter.courseLinks" />

## 学习网站

<LinkList :links="$frontmatter.guideLinks" />